import React from "react";
import HomeBanner from "../Components/HomeBanner";
import GompertDescription from "../Components/GompertDescription";
import LabDescription from "../Components/LabDescription";
import SelectedPublications from "../Components/SelectedPublications";
import Footer from "../Components/Footer";

function HomeContent() {
    return (
        <div>
            <HomeBanner />
            <LabDescription />
            <GompertDescription />
            <SelectedPublications />
            <Footer />
        </div>
    );
}

export default HomeContent;