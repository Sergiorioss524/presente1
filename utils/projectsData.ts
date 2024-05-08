import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectData {
  title: string
  description: string
  imgSrc: string
  href: string
  content: string
}

export const readProjectsData = (): ProjectData[] => {
  const directoryPath = path.join(process.cwd(), 'data')
  const fileNames = fs.readdirSync(directoryPath)

  return fileNames.map((fileName) => {
    const filePath = path.join(directoryPath, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      description: data.description,
      imgSrc: data.imgSrc,
      href: data.href,
      content,
    }
  })
}
