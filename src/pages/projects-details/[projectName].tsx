
import Header from '@/components/Header';
import ProjectDetails from '@/components/ProjectDetails';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import projects from '@/projects';
import { IProject } from '@/IProjects';

const ProjectsDetailsPage = () => {
  const [project, setProject] = useState<IProject>();
  const { query } = useRouter()
  const projectName = query.projectName

  const getProjectByName = () => {
    console.log(projects[0].name, projectName)
    const project = projects.filter(project => project.more === projectName)
    console.log(project)
    setProject(project[0])
  }

  const getProjectsDetails = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/projects');
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getProjectByName()
    // getProjectsDetails()
  }, [])
  useEffect(() => {
    // console.log({ query })
  }, [query])


  return (
    <div className='h-full'>
      <Header />
      <ProjectDetails project={project} projectName={projectName} />
    </div>
  )
}

export default ProjectsDetailsPage