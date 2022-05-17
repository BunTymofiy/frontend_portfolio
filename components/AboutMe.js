import React from 'react'
import userData from '../constants/data'
import ProgressBar from './ProgressBar'

export default function AboutMe({
  cv,
  about,
  programmingSkills,
  frameworksAndLibraries,
  databases,
}) {
  const cvUrl = 'https:' + cv[cv.length - 1].fields.cv.fields.file.url
  const aboutData = about[0].fields

  const programmingSkillsBars = () => {
    programmingSkills.reverse()
    let bars = []

    for (let i = 0; i < programmingSkills.length; i++) {
      let y = i + 1
      bars.push(
        <ProgressBar
          name={programmingSkills[i].fields.language}
          percentage={programmingSkills[i].fields.knowledgePercentage}
          logo={
            'https:' + programmingSkills[i].fields.languageImg.fields.file.url
          }
        />
      )
    }
    return bars
  }
  const frameworksAndLibrariesBars = () => {
    let bars = []

    for (let i = 0; i < frameworksAndLibraries.length; i++) {
      let y = i + 1
      bars.push(
        <ProgressBar
          name={frameworksAndLibraries[i].fields.name}
          percentage={frameworksAndLibraries[i].fields.knowledgePercentage}
          logo={
            'https:' + frameworksAndLibraries[i].fields.logo.fields.file.url
          }
        />
      )
    }
    return bars
  }
  const databasesBars = () => {
    let bars = []

    for (let i = 0; i < databases.length; i++) {
      let y = i + 1
      bars.push(
        <ProgressBar
          name={databases[i].fields.name}
          percentage={databases[i].fields.knowledgePercentage}
          logo={
            'https:' + databases[i].fields.logo.fields.file.url
          }
        />
      )
    }
    return bars
  }

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className=" py-20 text-center text-5xl font-bold md:text-left md:text-9xl">
          About Me.
        </h1>
      </div>
      <div className="-mt-10 bg-[#F1F1F1] dark:bg-gray-900">
        <div className="text-container mx-auto max-w-6xl pt-20">
          <p
            className="mx-4 text-2xl font-semibold leading-loose  md:text-4xl"
            style={{ lineHeight: '3rem' }}
          >
            {aboutData.about}. Currently working on{' '}
            <a
              className="rounded-md bg-red-500 px-2 py-1 text-white hover:scale-105"
              href={aboutData.currentProjectLink}
            >
              {aboutData.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] px-4 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-20 gap-x-20 pt-20 md:grid-cols-3">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                If you have any sort of questions write me a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                >
                  mail
                </a>{' '}
                and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                If you are interested to work with me, you can check my{' '}
                <a
                  href={cvUrl}
                  target="__blank"
                  className="border-b-2 border-gray-800 font-bold text-gray-800 dark:border-gray-300 dark:text-gray-300"
                >
                  CV
                </a>
                .
              </p>
            </div>
            {/* Social Links */}
            <h1 className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row items-center justify-start ">
                <a
                  href={userData.socialLinks.facebook}
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    Facebook
                  </p>
                </a>
              </div>

              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.github}
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.linkedin}
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-24 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.instagram}
                  className="group flex flex-row items-center space-x-4"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute bottom-0 h-0.5 w-full -translate-x-28 transform bg-gray-400 transition duration-300 group-hover:translate-x-0"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="mb-4 text-xl text-gray-700 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            {programmingSkills.length !== 0 && (
              <div>
                <h1 className="inline-block rounded-md bg-red-500 px-2 py-1 text-3xl font-bold text-gray-50">
                  Programming Languages
                </h1>
                <div className="mt-8 flex flex-wrap space-x-5">
                  <div className="grid grid-cols-2">
                    {programmingSkillsBars()}
                  </div>
                </div>
              </div>
            )}
            {frameworksAndLibraries.length !== 0 && (
              <div className='ml-1'>
                <h1 className="mt-10 inline-block rounded-md bg-red-500 px-2 py-1 text-3xl font-bold text-gray-50">
                  Frameworks and Libraries
                </h1>
                <div className="mt-8 flex flex-wrap space-x-5">
                  <div className="grid grid-cols-2">{frameworksAndLibrariesBars()}</div>
                </div>
              </div>
            )}
            {databases.length !== 0 && (
              <div className='ml-1'>
                <h1 className="mt-10 inline-block rounded-md bg-red-500 px-2 py-1 text-3xl font-bold text-gray-50">
                  Databases
                </h1>
                <div className="mt-8 flex flex-wrap space-x-5">
                  <div className="grid grid-cols-2">{databasesBars()}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
