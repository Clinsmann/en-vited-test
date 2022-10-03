import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext } from "react";

import "./styles.scss";
import { AppCtx } from "../../store/events-context";
import { yupResolver } from "@hookform/resolvers/yup";
import EventImage from "../../assets/create-event.png";
import { validationSchema } from "../../validation/event-validation";

const resolver = yupResolver(validationSchema);

const CreateEvent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const navigate = useNavigate();
  const appContext = useContext(AppCtx);

  const onSubmit = useCallback(
    (data: any) => {
      appContext.setEvent(data);
      navigate("/event");
    },
    [appContext, navigate]
  );

  return (
    <div className="page-wrapper">
      <div className="create-event">
        <img src={EventImage} alt="event" className="event-image" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create your event</h2>

          <div className="input-control">
            <label htmlFor="name">Event name</label>
            <input type="text" {...register("name")} />
            {errors?.name && (
              <label className="form-error">
                {errors?.name?.message as string}
              </label>
            )}
          </div>

          <div className="input-control">
            <label htmlFor="startTime">Start date</label>
            <input type="datetime-local" {...register("startTime")} />
            {errors?.startTime && (
              <label className="form-error">
                {errors?.startTime?.message as string}
              </label>
            )}
          </div>

          <div className="input-control">
            <label htmlFor="endTime">End date</label>
            <input type="datetime-local" {...register("endTime")} />
            {errors?.endTime && (
              <label className="form-error">
                {errors?.endTime?.message as string}
              </label>
            )}
          </div>

          <div className="input-control">
            <label htmlFor="hostName">Host name</label>
            <input type="text" {...register("hostName")} />
            {errors?.hostName && (
              <label className="form-error">
                {errors?.hostName?.message as string}
              </label>
            )}
          </div>

          <div className="input-control">
            <label htmlFor="location">Location</label>
            <input type="text" {...register("location")} />
            {errors?.location && (
              <label className="form-error">
                {errors?.location?.message as string}
              </label>
            )}
          </div>

          <div className="button-container">
            <button className="button" type="submit">
              Signup to create your event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
