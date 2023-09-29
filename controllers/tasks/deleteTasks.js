const deleteTask = async (req, res, next) => {

    
      const taskId = parseInt(req.params.id);
      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        res.status(204).send();
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    
};

module.exports = deleteTask;
