import { Grid } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import leader from '../../public/g2-medal.png';
import winner from '../../public/croz-medal.png';
import capterra from '../../public/capterra.png';
import trustpilot from '../../public/trustpilot-new.png';
import fivestar from '../../public/Stars_4.5-1.png';
import fivestar8 from '../../public/Stars_4.8-1.png';

const CompanyStart = () => {
    return (
        <div style={{marginTop: '100px'}}>
            <Grid container>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image src={leader} alt="leader" height="120px" width="250px"></Image>
                    <Image src={fivestar} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.5 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image src={winner} alt="leader" height="120px" width="250px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.8 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image src={trustpilot} alt="leader" height="110px" width="200px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.8 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image src={capterra} alt="leader" height="110px" width="200px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.5 stars</span> out of 5</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CompanyStart;