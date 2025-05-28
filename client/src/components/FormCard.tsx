import type { FormData } from "../interfaces/context";

const FormCard = ({ title, description, dueDate }: FormData) => {
  return (
    <div>
      <p className="pb-2">
        <span className="text-amber-200 font-semibold">Title: </span>
        {title}
      </p>
      <p className="mb-1">
        <span className="text-amber-200 font-semibold text-sm">
          Description:{" "}
        </span>
        {description}
      </p>
      <p className="">
        <span className="text-amber-200 font-semibold text-sm">Due date: </span>
        {dueDate}
      </p>
    </div>
  );
};

export default FormCard;
