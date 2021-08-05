import React from "react";
import "./middle.css";

class middle extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        src: ["video1.mp4"],
        description: "Loving the Nature",
        content:
          "Love for Nature The word nature usually associates with beauty and calmness. Whenever a person hears of the word nature, a feeling of enthusiasm, freshness, uplift and happiness is felt. People understand nature as anything that is on the earth that is comprised of the surrounding such as, the vegetation, animals, food, water, plants, the buildings, plantations and soil among others.",
      },
      {
        _id: "2",
        src: ["video2.mp4"],
        description: "Morning workout good for the Health",
        content:
          "Mornings are, to put it bluntly, hell for some of us. The sound of the alarm clock violently ringing in our ears rips us out of rest and puts us instantly in a bad mood. Worst of all, we're completely aware of being in a bad mood, but believe we're powerless to stop it. We have to wait until the mood burns off and hope we don't do anything we'll regret later.",
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  render() {
    const { products, index } = this.state;
    return (
      <div className="middle">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <video
                src={item.src[index]}
                width="500px"
                alt=""
                autoPlay
                muted
                loop
              />
            </div>

            <div className="box">
              <p>
                <b>{item.description}</b>
              </p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default middle;
