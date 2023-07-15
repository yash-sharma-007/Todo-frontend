/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { server } from "..";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Taskitems from "./Taskitems";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Task, setTask] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch(`${server}/task/fetchtask`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
        .then(async (res) => {
          const data = await res.json();
          setTask(data.tasks);
        })
        .catch((err) => {
          toast.error("Error in Fetching the Tasks");
        });
    } else {
      navigate("/login");
    }
  }, [refresh]);

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/task/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      setrefresh((p) => !p);
      setTitle("");
      setDescription("");
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const daleteTask = async (id) => {
    try {
      const response = await fetch(`${server}/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      toast.success(data.message);
      setrefresh((p) => !p);
    } catch (error) {
      toast.error("Error in deleting the Task");
    }
  };

  const updateTask = async (id) => {
    try {
      const response = await fetch(`${server}/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      toast.success(data.message);
      setrefresh((p) => !p);
    } catch (error) {
      toast.error("Error in updating the Task");
    }
  };

  return (
    <div className="container">
      <div className="upper">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <button onClick={addTask} type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <section className="todosContainer">
        {Task.map((i) => (
          <Taskitems
            title={i.title}
            description={i.description}
            isCompleted={i.isCompleted}
            time={i.createdAt}
            updateHandler={updateTask}
            deleteHandler={daleteTask}
            id={i._id}
            key={i._id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
