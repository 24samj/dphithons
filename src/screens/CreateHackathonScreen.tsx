import React, { useEffect, useState } from "react";
import uploadIcon from "../assets/icons/upload.svg";
import imageIcon from "../assets/icons/image.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import { addHackathon, editHackathon } from "../store/hackathonsSlice";
import { generateRandomAlphaNumericString } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { Hackathon, Level } from "../types/types";

const CreateHackathonScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const hackathons = useSelector(
    (state: RootState) => state.hackathons.hackathons,
  );

  const [hackathonDetails, setHackathonDetails] = useState<Hackathon>({
    id: generateRandomAlphaNumericString(10),
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    image: "",
    level: "Easy", // Default level
    overview: "Default overview",
  });

  useEffect(() => {
    if (id) {
      const hackathon = hackathons.find((hackathon) => hackathon.id === id);
      if (hackathon) {
        setHackathonDetails(hackathon);
      }
    }
  }, [id]);

  // Update hackathon details
  const updateHackathonDetails = (key: keyof Hackathon, value: string) => {
    setHackathonDetails((prevDetails) => ({ ...prevDetails, [key]: value }));
  };

  // Handle level change with type assertion
  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Level;
    updateHackathonDetails("level", value);
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setHackathonDetails((prevDetails) => ({
          ...prevDetails,
          image: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(hackathonDetails).some((value) => !value.trim())) {
      alert("Please fill in all fields.");
      return;
    }

    if (id) {
      handleEditChallenge();
    } else {
      handleAddChallenge();
    }
  };

  const handleAddChallenge = () => {
    dispatch(addHackathon(hackathonDetails));
    navigate("/");
  };

  const handleEditChallenge = () => {
    dispatch(editHackathon(hackathonDetails));
    navigate(`/`);
  };

  const getMinDate = () => {
    if (hackathonDetails.startDate) {
      const startDate = new Date(hackathonDetails.startDate);
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + 1);
      return nextDay.toISOString().slice(0, 16);
    } else {
      const today = new Date();
      return today.toISOString().slice(0, 16);
    }
  };

  return (
    <div className="px-8 py-12 md:px-24">
      <h2 className="text-2xl font-bold">Challenge Details</h2>
      <form onSubmit={handleSubmit} className="mt-18 flex flex-col gap-8">
        <div>
          <label htmlFor="name" className="block">
            Challenge Name
          </label>
          <input
            value={hackathonDetails.name}
            type="text"
            name="name"
            id="name"
            className="mt-5 w-full rounded-lg border-2 border-border px-6 py-2 md:max-w-96"
            onChange={(e) => updateHackathonDetails("name", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Start Date</span>
          <label
            htmlFor="startDate"
            className="relative mt-5 flex w-full justify-between rounded-lg border-2 border-border px-6 py-2 md:max-w-96"
          >
            {hackathonDetails.startDate ? (
              <span className="text-extra">{hackathonDetails.startDate}</span>
            ) : (
              <span className="text-extra">Add start date</span>
            )}
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              value={hackathonDetails.startDate}
              type="datetime-local"
              name="startDate"
              id="startDate"
              className="absolute inset-0 opacity-0" // Use opacity instead of visibility to keep the input focusable
              min={new Date().toISOString().slice(0, 16)}
              onChange={(e) =>
                updateHackathonDetails("startDate", e.target.value)
              }
            />
            <img src={calendarIcon} alt="calendar" />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <span>End Date</span>
          <label
            htmlFor="endDate"
            className="relative mt-5 flex w-full justify-between rounded-lg border-2 border-border px-6 py-2 md:max-w-96"
          >
            {hackathonDetails.endDate ? (
              <span className="text-extra">{hackathonDetails.endDate}</span>
            ) : (
              <span className="text-extra">Add end date</span>
            )}
            <input
              onClick={(e) => e.currentTarget.showPicker()}
              value={hackathonDetails.endDate}
              type="datetime-local"
              name="endDate"
              id="endDate"
              className="absolute inset-0 opacity-0"
              min={getMinDate()}
              onChange={(e) =>
                updateHackathonDetails("endDate", e.target.value)
              }
            />
            <img src={calendarIcon} alt="calendar" />
          </label>
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            value={hackathonDetails.description}
            name="description"
            id="description"
            className="mt-5 min-h-72 w-full resize-none rounded-lg border-2 border-border px-4 py-4 md:max-w-[65%]"
            onChange={(e) =>
              updateHackathonDetails("description", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="image">Image</label>
          {!hackathonDetails?.image ? (
            <div className="max-w-60 rounded-lg border-2 border-[#aeaeae] bg-[#F4F4F4] px-4 py-3">
              <label htmlFor="image" className="flex justify-center gap-4">
                <span className="text-extra">Upload</span>
                <img src={uploadIcon} alt="upload" className="h-auto w-6" />
              </label>
            </div>
          ) : (
            <div>
              <img
                src={hackathonDetails.image}
                alt="image"
                className="aspect-video h-auto w-full rounded-lg md:w-40"
              />
              <div className="mt-4 flex gap-2">
                <img src={imageIcon} alt="image" className="h-auto w-6" />
                <label
                  htmlFor="image"
                  className="cursor-default text-green-700"
                >{`Change image ->`}</label>
              </div>
            </div>
          )}
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="level" className="block">
            Level Type
          </label>
          <select
            name="level"
            id="level"
            className="mt-5 w-full appearance-none rounded-lg border-2 border-border bg-[linear-gradient(45deg,transparent_50%,gray_50%),linear-gradient(135deg,gray_50%,transparent_50%),linear-gradient(to_right,#ccc,#ccc)] bg-[5px_5px,5px_5px,1px_1.5em] bg-[calc(100%_-_20px)_calc(1em_+_2px),calc(100%_-_15px)_calc(1em_+_2px),calc(100%_-_2.5em)_0.5em] bg-no-repeat px-4 py-2 md:max-w-64"
            value={hackathonDetails.level}
            onChange={handleLevelChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-negative mt-5 flex max-w-max items-center gap-4 self-end rounded-lg bg-accent px-8 py-2 text-lg font-medium md:self-start"
        >
          {id ? "Save Changes" : "Create Challenge"}
        </button>
      </form>
    </div>
  );
};

export default CreateHackathonScreen;
