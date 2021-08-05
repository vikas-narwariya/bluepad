import React from "react";
import "./pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../../assets/articleimages/1.jpg";
import img2 from "../../../../assets/articleimages/2.jpg";
import img3 from "../../../../assets/articleimages/3.jpg";
import img4 from "../../../../assets/articleimages/4.jpg";

const Moral = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mask Distribution</h5>
                <p className="card-text">
                  The Mask-to-Mask Distribution Environment is Changing
                  Everything The B2B distribution business has been adjusting to
                  the new mask-to-mask business environment by changing how
                  distributors handle inventory, deliver products and
                  communicate with customers.
                </p>
                <a
                  href="https://www.mdm.com/blog/sales-marketing/remote-sales/the-mask-to-mask-distribution-environment-is-changing-everything/"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Human Nature</h5>
                <p className="card-text">
                  Human nature is a concept that denotes the fundamental
                  dispositions and characteristics—including ways of thinking,
                  feeling, and acting—that humans are said to have naturally.
                  The term is often used to denote the essence of humankind, or
                  what it 'means' to be human.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Human_nature"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Empty Room</h5>
                <p className="card-text">
                  In the midst of grief over the death of a family member, one
                  person's loss is often less acknowledged than others, the
                  sibling left behind. NPR's Neil Conan speaks with the author
                  of The Empty Room, which explores the experience of losing a
                  brother or sister.
                </p>
                <a
                  href="https://www.npr.org/templates/story/story.php?storyId=3846373"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Colorful Room</h5>
                <p className="card-text">
                  We present the short story "The Masque of the Red Death, by
                  Edgar Allen Poe. The story was originally adapted and recorded
                  by the U.S. Department of State. The Red Death had long been
                  feeding on the country.No sickness had ever deadly.
                </p>
                <a
                  href="https://learningenglish.voanews.com/a/the-masque-of-the-red-death-edgar-allen-poe/3702277.html"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Moral;
