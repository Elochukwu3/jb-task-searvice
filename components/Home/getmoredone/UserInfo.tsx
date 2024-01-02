const UsersInfo = ({path, label}: {path: string, label:string}) => {
    return (
      <li className="flex flex-col items-center m-3 text-white/70 justify-center  ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path
            fillRule="evenodd"
            d={path}
            clipRule="evenodd"
          ></path>
        </svg>
        <label className="block">
          {label}
        </label>
      </li>
    );
  };
  export default UsersInfo