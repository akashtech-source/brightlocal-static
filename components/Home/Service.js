import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import headerImg from '../../public/Header_Image-1.png';
import headerImg2 from '../../public/lsg-graphic-dots-2x.png';
import headerImg3 from '../../public/LSA_Image_3_Updated.png';
import headerImg4 from '../../public/GMB_Image_3.png';
import headerImg5 from '../../public/CT_Header.png';
import Image from 'next/image'


const Service = () => {
    return (
        <div style={{padding: '100px'}}>
            {/* 1st row */}
            <Grid container>
                <Grid item lg={6} style={{marginTop: '50px'}}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    LOCAL SEARCH RANK CHECKER
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >Know where you rank, and what to <br /> focus on</h2>
                    <ul>
                        <li><h4>Monitor rankings at city or postal code level</h4></li>
                        <li><h4>Compare rankings for 100s of locations in one report</h4></li>
                        <li><h4>Benchmark rankings vs competitors</h4></li>
                        <li><h4>Uncover localized search volumes so you know the best keywords to target</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image src={headerImg} alt="header-image"></Image>
                </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                <Image src={headerImg2} alt="header-image"></Image>
                </Grid>
                <Grid item lg={6}>
                <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    LOCAL SEARCH GRID
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >Put your rankings on the map</h2>
                    <ul>
                        <li><h4>See how much local search visibility you’re really claiming</h4></li>
                        <li><h4>Spot opportunities to outrank competitors</h4></li>
                        <li><h4>Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric</h4></li>
                        <li><h4>Identify spam in Google My Business profiles</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                    
                </Grid>
            </Grid>

            {/* 3rd row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    LOCAL SEO AUDITS
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >Spot optimization opportunities <br /> instantly</h2>
                    <ul>
                        <li><h4>Analyze 300+ data points in minutes – without lifting a finger</h4></li>
                        <li><h4>Quickly identify areas for improvement</h4></li>
                        <li><h4>Get benchmarks against your top-ranking competitors</h4></li>
                        <li><h4>Win more pitches and impress existing clients with white-label audits</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image src={headerImg3} alt="header-image"></Image>
                </Grid>
            </Grid>
            {/* 4th row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                <Image src={headerImg4} alt="header-image"></Image>
                </Grid>
                <Grid item lg={6}>
                <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    GOOGLE MY BUSINESS AUDIT
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >Uncover the GMB insights to <br /> leapfrog the competition</h2>
                    <ul>
                        <li><h4>Discover the GMB categories used by top-ranking competitors</h4></li>
                        <li><h4>See how you stack up vs. the competition against the most important local ranking factors that affect local rankings</h4></li>
                        <li><h4>Identify duplicate listings with ease</h4></li>
                        <li><h4>Make more informed decisions with 3x more data than what GMB Insights provides</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                    
                </Grid>
            </Grid>
            {/* 5th row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    CITATION TRACKER
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >Easily track and manage local <br /> citations</h2>
                    <ul>
                        <li><h4>Discover new citation building opportunities</h4></li>
                        <li><h4>Identify harmful duplicate or inaccurate citations that need fixing</h4></li>
                        <li><h4>Spy on your competitors to see where they’re listed, and you’re not</h4></li>
                        <li><h4>Track week-on-week citation growth</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image src={headerImg5} alt="header-image"></Image>
                </Grid>
            </Grid>
        </div>
    );
};

export default Service;