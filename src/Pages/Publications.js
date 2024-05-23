import React from 'react';
import HeadBanner from '../Components/HeadBanner';
import Footer from '../Components/Footer';
import '../Styles/Publications.css';

function Publications() {
    return(
        <div>
            <HeadBanner title='Publications'/>
            <div className='pubWrapper'>
                <div className='pubContent'>
                    <ul>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/37657939/" target='_blank' rel="noreferrer" class="article">Association of Plasma Phosphorylated Tau With the Response to Neflamapimod Treatment in Patients With Dementia With Lewy Bodies.</a>
                            <br/>Alam, J. J., Maruff, P., Doctrow, S. R., Chu, H. M., Conway, J., Gomperts, S. N., & Teunissen, C.<br/>
                            Neurology. 2023;101(17):e1708-e1717. doi:10.1212/WNL.0000000000207755
                            </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/30843520/" target='_blank' rel="noreferrer" class="article">Cholinergic modulation of hippocampal calcium activity across the sleep-wake cycle.</a>
                            <br/>Zhou H, Neville KR, Goldstein N, Kabu S, Kausar N, Ye R, Nguyen TT, Gelwan N, Hyman BT, Gomperts SN.<br/>
                            Elife. 2019 Mar 7;8:e39777. doi: 10.7554/eLife.39777.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/37567942/" target='_blank' rel="noreferrer" class="article">Optogenetic targeting of astrocytes restores slow brain rhythm function and slows Alzheimer's disease pathology.</a>
                            <br/>Lee, Y. F., Russ, A. N., Zhao, Q., Perle, S. J., Maci, M., Miller, M. R., Hou, S. S., Algamal, M., Zhao, Z., Li, H., Gelwan, N., Liu, Z., Gomperts, S. N., Araque, A., Galea, E., Bacskai, B. J., & Kastanenka, K. V.<br/>
                            Sci Rep. 2023;13(1):13075. Published 2023 Aug 11. doi:10.1038/s41598-023-40402-3
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/36471155/" target='_blank' rel="noreferrer" class="article">Disruption of hippocampal neuronal circuit function depends upon behavioral state in the APP/PS1 mouse model of Alzheimer's disease. </a>
                            <br/>Heng Zhou, Hanyan Li, Niket Gowravaram, Moqin Quan, Naila Kausar, Stephen N Gomperts<br/>
                            Sci Rep. 2022;12(1):21022. Published 2022 Dec 5. doi:10.1038/s41598-022-25364-2
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/33578418/" target='_blank' rel="noreferrer" class="article">18F-AV-1451 positron emission tomography in neuropathological substrates of corticobasal syndrome</a>
                            <br/>Goodheart AE, Locascio JJ, Samore WR, Collins JA, Brickhouse M, Schultz A, Touroutoglou A, Johnson KA, Frosch MP, Growdon JH, Dickerson BC, Gomperts SN.<br/>
                            Nat Commun. 2022 Sep 21;13(1):5308. doi: 10.1038/s41467-022-32944-3.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/27654968/" target='_blank' rel="noreferrer" class="article">Tau Positron Emission Tomographic Imaging in the Lewy Body Diseases.</a>
                            <br/>Gomperts SN, Locascio JJ, Makaretz SJ, Schultz A, Caso C, Vasdev N, Sperling R, Growdon JH, Dickerson BC, Johnson K.<br/>
                            JAMA Neurol. 2016 Nov 1;73(11):1334-1341. doi: 10.1001/jamaneurol.2016.3338.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/33639572/" target='_blank' rel="noreferrer" class="article">Serum NFL levels predict progression of motor impairment and reduction in putamen dopamine transporter binding ratios in de novo Parkinson's disease: An 8-year longitudinal study</a>
                            <b/>Ye R, Locascio JJ, Goodheart AE, Quan M, Zhang B, Gomperts SN.<br/>
                            Parkinsonism Relat Disord. 2021 Apr;85:11-16. doi: 10.1016/j.parkreldis.2021.02.008. Epub 2021 Feb 17.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/31243072/" target='_blank' rel="noreferrer" class="article"> Neuropathologic correlates of amyloid and dopamine transporter imaging in Lewy body disease.</a>
                            <br/>Shirvan J, Clement N, Ye R, Katz S, Schultz A, Johnson KA, Gomez-Isla T, Frosch M, Growdon JH, Gomperts SN.<br/>
                            Neurology. 2019 Jul 30;93(5):e476-e484. doi: 10.1212/WNL.0000000000007855. Epub 2019 Jun 26.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/32059167/" target='_blank' rel="noreferrer" class="article">Topography of cortical thinning in the Lewy body diseases.</a>
                            <br/>Ye R, Touroutoglou A, Brickhouse M, Katz S, Growdon JH, Johnson KA, Dickerson BC, Gomperts SN.<br/>
                            Neuroimage Clin. 2020;26:102196. doi: 10.1016/j.nicl.2020.102196. Epub 2020 Jan 31.
                        </li>
                        <li>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/23243071/" target='_blank' rel="noreferrer" class="article">Amyloid is linked to cognitive decline in patients with Parkinson disease without dementia.</a>
                            <br/>Gomperts SN, Locascio JJ, Rentz D, Santarlasci A, Marquie M, Johnson KA, Growdon JH.<br/>
                            Neurology. 2013 Jan 1;80(1):85-91. doi: 10.1212/WNL.0b013e31827b1a07. Epub 2012 Dec 12.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Publications;