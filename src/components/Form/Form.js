import { useForm } from "react-hook-form";



const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example"))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="a" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
            <p>{watch("example")} - {watch("exampleRequired")}</p>

        </form>
    )
};

export default Form;