// Modal functionality
class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        
        if (!this.modal) {
            console.log(`Modal with id "${modalId}" not found`);
            return;
        }
        
        this.overlay = this.modal.querySelector('[class*="__overlay"]');
        this.closeBtn = this.modal.querySelector('[class*="__close"]');
        this.iframe = this.modal.querySelector('iframe');
        
        this.init();
    }
    
    init() {
        if (!this.modal) return;
        
        // Close modal on overlay click
        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        // Close modal on close button click
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.close();
            });
        }
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }
    
    open(videoUrl = null) {
        if (!this.modal) return;
        
        if (videoUrl && this.iframe) {
            this.iframe.src = videoUrl;
        }
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        if (!this.modal) return;
        
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear iframe src to stop video
        if (this.iframe) {
            this.iframe.src = '';
        }
    }
    
    isOpen() {
        return this.modal && this.modal.classList.contains('active');
    }
}

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modals
    const modals = {};
    
    // Video modal
    modals.video = new Modal('videoModal');
    
    // Course modals
    modals.course1 = new Modal('courseModal1');
    modals.course2 = new Modal('courseModal2');
    modals.course3 = new Modal('courseModal3');
    modals.course4 = new Modal('courseModal4');
    
    // Global functions for opening modals
    window.openVideoModal = (videoUrl) => {
        modals.video.open(videoUrl);
    };
    
    window.openCourseModal = (modalNumber) => {
        const modalKey = `course${modalNumber}`;
        if (modals[modalKey]) {
            modals[modalKey].open();
        }
    };
    
    // Global functions for closing modals
    window.closeVideoModal = () => {
        modals.video.close();
    };
    
    window.closeCourseModal = (modalNumber) => {
        const modalKey = `course${modalNumber}`;
        if (modals[modalKey]) {
            modals[modalKey].close();
        }
    };
    
    // Close all modals
    window.closeAllModals = () => {
        Object.values(modals).forEach(modal => {
            if (modal.isOpen()) {
                modal.close();
            }
        });
    };
});
