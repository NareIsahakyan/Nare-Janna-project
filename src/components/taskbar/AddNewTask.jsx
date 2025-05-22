const AddNewTask = () => {
  return (
    <>
      <div className={styles.aTask}>
        <h3>Title</h3>
        <p>{props.description}</p>
        <img src={props.image} alt="" />
        <div
          style={{ backgroundColor: "#bfbfc0", width: "188px", height: "16px" }}
        ></div>
        <div
          style={{ backgroundColor: "#bfbfc0", width: "188px", height: "16px" }}
        ></div>
        <div style={{ width: "50px", height: "50px", backgroundColor: "blue" }}>
          <div>{props.worcersIcons}</div>
          <div>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTask;
