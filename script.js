               const API_KEY = "";
               document.addEventListener('DOMContentLoaded' , () => {
                const preloader = document.getElementById('preloader');
                const mainContent = document.getElementById('main-content');
                const countdownElement = document.getElementById('countdown');
                const generateButton = document.getElementById('generate-message');
                const loader = document.getElementById('loader');
                const messageContainer = document.getElementById('gemini-message-container');
                const massageText = document.getElementById('gemini-message');
                const music = document.getElementById('background-music');

                let countdown = 10;

                const interval = setInterval(() => {
                    countdown--;
                    countdownElement.textContent = countdown;

                    if (countdown <= 0) {
                        clearInterval(interval);
                        preloader.style.opacity = '0';
                        setTimeout(() => {
                            preloader.style.display = 'none';
                            mainContent.classList.add('visible');
                        }, 1000);
                    }
                }, 1000);
               })