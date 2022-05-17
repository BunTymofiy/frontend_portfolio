import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'

export default function Hero({ avatarImage }) {
  const url = "https:" + avatarImage[avatarImage.length - 1].fields.avatar.fields.file.url;
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6']
  return (
    <div className="flex flex-row items-start justify-center overflow-hidden">
      {/* Text container */}

      <div className="mx-auto w-full text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 dark:text-gray-200 md:text-8xl">
              Developer.
            </h1>
          </RainbowHighlight>

          <RainbowHighlight color={colors[1]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 dark:text-gray-200 md:text-8xl">
              Programmer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="relative -mr-40 mt-20 hidden w-full md:w-1/2 lg:block">
        <div className="w-3/4 ">
          <img src={url} alt="avatar" className=" shadow-xl" />
          <div className="mt-4 flex flex-row justify-between">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
