import { Fragment } from "react/jsx-runtime";
import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
import { ProfileData } from "../data/data";
import Btn from "../components/UI/Btn";
import InputComponent from "../components/UI/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSchema from "../schema/Schema";
import Error from "../components/Error/Error";
import toast from "react-hot-toast";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  Address1: string;
  Address2: string;
}

const ProfileFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = () => {
    toast.success("user has been created successfully");
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  /*-----------RENDER --------------*/
  const ProfileInputs = ProfileData.map((item) => {
    return (
      <Fragment key={item.name}>
        <InputComponent
          type={item.type}
          placeholder={item.placeholder}
          {...register(item.name, item.validation)}
        />
        {errors[item.name] && <Error error={errors[item.name]?.message} />}
      </Fragment>
    );
  });

  return (
    <div className="profile-form">
      <PageHeadingText h1="create user" paragraph="Create a New User Profile" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {ProfileInputs}
        <Btn
          type="submit"
          className="mt-5 text-white/90 font-semibold"
          bgcolor="#3e4396"
        >
          create new user
        </Btn>
      </form>
    </div>
  );
};

export default ProfileFormPage;
