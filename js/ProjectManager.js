// Description: This file contains the ProjectManager class which is responsible for managing the projects and displaying them in a modal.
//add Scroll disable and enable functionality -- 2025-03-06

// const projectData = [
//     {
//         id: 'smart-garage-door-system',
//         title: 'Smart Garage Door System',
//         description: 'A smart garage door system that detects when a user approaches and automatically unlocks the door via an MQTT-based communication system.',
//         technologies: ['Android studio', 'MQTT', 'Linux server', 'Java'],
//         image: 'images/GP.png',
//         year: '2023 Q4',
//         githubLink: '',
//         challenges:[
//             'Ensure the system can accurately detect the user approaching the garage door.',
//             'Establish reliable MQTT communication between the Linux server and the door system.',
//             'Ensure the door system correctly processes and responds to MQTT signals.'
//         ],
//         features: [
//             'Hands-free automatic door unlocking using mobile device proximity detection.',
//             'Secure communication using MQTT protocol.',
//             'Remote access and control via a mobile app (if applicable).'
//         ]
//     }
// ];
class ProjectManager{
    constructor(projects){
        this.projects = projects;
        this.modalContainer = null;
        this.initalizeModal();
    }
    //initialize the modal container
    initalizeModal(){
        this.modalContainer = document.createElement('div');
        this.modalContainer.classList.add('project-modal');
        this.modalContainer.style.display = 'none';
        document.body.appendChild(this.modalContainer);

        this.modalContainer.addEventListener('click', (event) => {
            if(event.target === this.modalContainer){
                this.closeModal();
            }
        });
    }
    disableScroll(){
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = this.getSAcrollbarWidth() + 'px';
    }
    enableScroll(){ 
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
    getSAcrollbarWidth(){
        return window.innerWidth - document.documentElement.clientWidth;
    }

    openProject(projectID){
        console.log(this.projects);
        const project = this.projects.find(project => project.id === projectID);
        if(!project){
            console.error('Project not found');
            return;
        }
        console.log(project.technologies);
        //Create the modal content
        this.modalContainer.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="project-details">
                    <h2>${project.title}</h2>
                    <h3>Time: ${project.year}</h3>
                    <p>${project.description}</p>
                    <h3>Build /w</h3>
                    <div class="Technologies">
                        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    <h3>Features</h3>
                    <ul>
                        ${project.features.split(';').map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <h3>Challenges OverCome</h3>
                    <ul>
                        ${project.challenges.split(';').map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                    <div class="project-links">
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">View On Github</a>` : ''}
                    </div>
                </div>
                <img class="project-images" src="${project.image}" alt="${project.title}">
            </div>
        `;
        //Add close button event functionality
        const closeButton = this.modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
            this.closeModal();
        });
        // const openPhoto = this.modalContainer.querySelector('.project-images');
        // openPhoto.addEventListener('click', function (){
        //     const modal = createModal();
        //     this.modalContainer.body.appendChild(modal);
        // });
        //Show the modal
        this.modalContainer.style.display = 'flex';
        this.disableScroll();
    }
    closeModal(){
        this.modalContainer.style.display = 'none';
        this.enableScroll();
    }
//     // Create OpenPhoto
//     openPhoto() {
//         const modal = this.modalContainer.createElement('div');
//         modal.className = 'image-modal';
//         modal.style.position = 'fixed';
//         modal.style.top = '0';
//         modal.style.left = '0';
//         modal.style.width = '100%';
//         modal.style.height = '100%';
//         modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//         modal.style.display = 'flex';
//         modal.style.alignItems = 'center';
//         modal.style.justifyContent = 'center';
//         modal.style.zIndex = '1000';
        
//         // Add larger image to the modal
//         const largeImage = this.modalContainer.createElement('img');
//         largeImage.src = thumbnailImage.src; // Use the same source or replace with a higher quality version
//         largeImage.style.maxWidth = '90%';
//         largeImage.style.maxHeight = '90%';
//         largeImage.style.border = '2px solid white';
        
//         // Add close button
//         const closeButton = this.modalContainer.createElement('button');
//         closeButton.textContent = 'Close';
//         closeButton.style.position = 'absolute';
//         closeButton.style.top = '20px';
//         closeButton.style.right = '20px';
//         closeButton.style.padding = '10px 20px';
//         closeButton.style.background = 'white';
//         closeButton.style.border = 'none';
//         closeButton.style.cursor = 'pointer';
        
//         // Add click event to close the modal
//         closeButton.addEventListener('click', () => {
//             this.modalContainer.body.removeChild(modal);
//         });
        
//         // Also close when clicking outside the image
//         modal.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             this.modalContainer.body.removeChild(modal);
//         }
//         });
        
//         // Add elements to modal
//         modal.appendChild(largeImage);
//         modal.appendChild(closeButton);
        
//         return modal;
//     }
}


  
