import { Input } from "./Input";

type FormProps = {
  addPerson: (name: string) => void;
};

export const Form = ({ addPerson }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (!name) {
      alert("Please Provide Name Value");
      return;
    }

    addPerson(name);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <Input />
      </div>

      <button className="btn btn-block" type="submit">
        submit
      </button>
    </form>
  );
};
