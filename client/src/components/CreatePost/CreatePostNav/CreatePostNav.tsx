import {
  faBold,
  faCode,
  faItalic,
  faLink,
  faList,
  faListOl,
  faQuoteLeft,
  faUnderline,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {};

const CreatePostNav = (props: Props) => {
  return (
    <nav className="custom-container flex items-center mx-auto px-2 z-50 sticky top-16 py-2 border-b bg-white">
      <div className="flex">
        <div className="border-x px-1">
          <select
            id="font-type"
            className="p-2 bg-white hover:cursor hover:bg-slate-100 rounded"
          >
            <option className="text-2xl font-semibold">Normal</option>
            <option className="text-xl font-semibold">Heading 1</option>
            <option>Heading 2</option>
          </select>
        </div>
        <div className="border-r px-1 flex gap-1">
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faBold} size="lg" className="mx-auto" />
          </button>
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faUnderline} size="lg" />
          </button>
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faItalic} size="lg" />
          </button>
        </div>
        <div className="border-r px-1 flex gap-1">
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faListOl} />
          </button>
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
        <div className="border-r px-1 flex gap-1">
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
          </button>
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faLink} size="lg" />
          </button>
          <button className="w-8 h-10 hover:bg-slate-200 hover:text-indigo-800 rounded">
            <FontAwesomeIcon icon={faCode} size="lg" />
          </button>
        </div>
      </div>
      <div className="ml-auto border rounded px-3 py-2 text-indigo-800 border-indigo-800 cursor-pointer hover:bg-indigo-800 hover:text-white ease-in-out duration-300">
        <button>Publish</button>
      </div>
    </nav>
  );
};

export default CreatePostNav;
