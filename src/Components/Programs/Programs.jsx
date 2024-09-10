import "./Programs.css";
import img_1 from "../../assets/program-1.png";
import img_2 from "../../assets/program-2.png";
import img_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
function Programs() {
  return (
    <div className="programs">
      <div className="program">
        <img src={img_1} alt="program1" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img_2} alt="program2" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master's degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img_3} alt="program3" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
