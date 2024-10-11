import clsx from "clsx";
import { useContext, useState } from "react";
import DialogPrimitive from "./DialogPrimitive";
import iconBoard from "@assets/icon-board.svg";
import { DataContext } from "@/DataContext";
import AddNewBoardForm from "./AddNewBoardForm";


/**
 * SideMenu component that renders a list of boards and a button to create a new board
 *
 * @param {Object} props - The component's properties
 * @param {Number} props.selectedBoardIndex - Index of the currently selected board
 * @param {Function} props.setSelectedBoardIndex - Function to set the selected board index
 * 
 * @returns {JSX.Element} - The rendered SideMenu component
 */


const SideMenu = () => {
  const [ open, setOpen ] = useState(false);
  const {data, selectedBoardIndex, setSelectedBoardIndex} = useContext(DataContext);

  return (
    <aside className="side-menu -mt-px w-[300px] border-r border-lines-light bg-white">
      <p className="px-8 py-4 text-heading-s">ALL BOARDS ({data.length})</p>
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            <button
              className={clsx(
                "flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4 text-heading-m text-medium-grey transition data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple",
                {
                  "bg-main-purple !text-white hover:bg-main-purple":
                    selectedBoardIndex === index,
                },
              )}
              data-isactive={selectedBoardIndex === index}
              onClick={() => setSelectedBoardIndex(index)}
            >
              <img src={iconBoard} alt="" /> {item.title}
            </button>
          </li>
        ))}
        <li className="px-8 py-4">
          <DialogPrimitive
            isOpen={open}
            setOpen={setOpen}
            title="Creat New Board"
            triggerComponent={
              <button className="flex w-full items-center gap-4 text-heading-m text-main-purple">
                <img src={iconBoard} alt="" /> + Create New Board
              </button>
            }
          >
            <AddNewBoardForm toggleDialog={setOpen} />
          </DialogPrimitive>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
