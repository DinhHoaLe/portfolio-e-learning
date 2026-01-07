import React from "react";
import DetailTitleComponent from "./DetailTitleComponent";
import DetailContentComponent from "./DetailContentComponent";
import DetailCardComponent from "./DetailCardComponent";
import DetailCourseContentComponent from "./DetailCourseContentComponent";
import StudentsBoughtComponent from "./StudentsBoughtComponent";
import { DetailFrequentlyBoughtTogetherComponent } from "./DetailFrequentlyBoughtTogetherComponent";
import { DetailInstructionsComponent } from "./DetailInstructionsComponent";
import DetailReviewComponent from "./DetailReviewComponent";

const DetailPageBody = () => {
  return (
    <div className="min-h-screen bg-white font-sans grid grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col">
        <DetailTitleComponent />
        <DetailContentComponent />
        <DetailCourseContentComponent />
        <StudentsBoughtComponent />
        <DetailFrequentlyBoughtTogetherComponent />
        <DetailInstructionsComponent />
        <DetailReviewComponent />
      </div>

      <div className="col-span-1">
        <div className="sticky top-20">
          <DetailCardComponent />
        </div>
      </div>
    </div>
  );
};

export default DetailPageBody;
