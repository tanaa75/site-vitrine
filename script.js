// Animation du header au scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Animation des éléments au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec la classe reveal
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    // Gestion du formulaire de contact
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Animation du bouton
      const button = this.querySelector('button');
      const originalText = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      button.style.opacity = '0.7';
      
      // Simulation d'envoi
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
        button.style.background = 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)';
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.opacity = '1';
          button.style.background = '';
          this.reset();
          
          // Notification de succès
          showNotification('Merci ! Votre message a été envoyé avec succès. Nous vous répondrons rapidement.', 'success');
        }, 2000);
      }, 1500);
    });

    // Fonction de notification
    function showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)' : 'var(--primary-gradient)'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        max-width: 300px;
      `;
      
      notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> ${message}`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);
      
      setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 4000);
    }

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animation de typing pour le titre
    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = '';
      
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    // Initialisation des animations
    window.addEventListener('load', () => {
      // Animation du logo au chargement
      const logo = document.querySelector('.logo');
      logo.style.animation = 'logoGlow 3s ease-in-out infinite alternate';
      
      // Affichage de bienvenue
      setTimeout(() => {
        showNotification('Bienvenue sur notre site vitrine moderne ! Explorez nos services.', 'info');
      }, 2000);
    });

    // Gestion du menu mobile (pour future implémentation)
    document.querySelector('.mobile-menu').addEventListener('click', function() {
      // Logique du menu mobile à implémenter si nécessaire
      console.log('Menu mobile cliqué - À implémenter selon les besoins');
    });

    // Effet parallax léger sur le hero
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });