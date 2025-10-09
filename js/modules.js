import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const supabaseUrl = 'https://rvaioywxfhmocecedllp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2YWlveXd4Zmhtb2NlY2VkbGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4OTk1MDQsImV4cCI6MjA3NTQ3NTUwNH0.5XrevSt0boGpdHDxlkVGDtLCLYHi-vb6Nc_6I71zoCw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test(){
  const {data} = await supabase.from('projects').select('*');
  console.log(data);
  const projectManager = new ProjectManager(data);
  document.querySelectorAll('.project-item').forEach(projectItem => {
    projectItem.addEventListener('click', () =>{
        const projectID = projectItem.getAttribute('id');
        console.log(projectID);
        projectManager.openProject(projectID);
    });
});
}
test();