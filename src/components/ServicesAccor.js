import '../css/ServicesAccordion.css'

export default function ServicesAccor() {
    return (
        <div className="accordion my-5" id="serviceAccor" data-bs-theme="light">

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fs-4 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConsult" aria-expanded="true" aria-controls="collapseConsult">
                        Consultations
                    </button>
                </h2>

                <div id="collapseConsult" className="accordion-collapse collapse show" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div class="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">MicroLocs Consultation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            An assessment of the hair and scalp. 
                                            Also, to educate and to discuss any questions and pricing of MicroLoc services. 
                                            Please arrive with hair clean and in it's natural state. 
                                            Please contact the studio if a Zoom consultation is required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                <h5 className="card-header pt-2">Locs - Consultation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Please arrive with hair clean and in it's natural state. 
                                            Consultation includes hair/scalp assessment, discussion on size, technique, and Loc options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Wicks Consultation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Thinking about Wicks! Come on through. 
                                            Please arrive with hair clean and in it's natural state. 
                                            Consultation includes hair/scalp assessment, discussion on size, technique, and Wick options.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                <h5 className="card-header pt-2">SisterLock Consultation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            In depth assessment of scalp and hair, education of Sisterlock process and installation of 12 Sisterlocks as part of the consultation. 
                                            Please contact the studio before booking. 
                                            Please arrive with hair clean and in it's natural state.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExten" aria-expanded="true" aria-controls="collapseExten">
                        Extensions
                    </button>
                </h2>

                <div id="collapseExten" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Femi Twist Extensions</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Two-strand twist extensions are beautiful, natural looking and is a protective style.
                                            (3pks of hair included)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-medium fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStyling" aria-expanded="true" aria-controls="collapseStyling">
                        Natural Styling
                    </button>
                </h2>

                <div id="collapseStyling" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Natural Style - Shampoo/Condition/Blowdry</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Natural hairstyling of your curly hair into artwork. 
                                            Leave the studio loving you crown! 
                                            Pricing depends upon style/time required. 
                                            Please contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Natural Style - Rod Set</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                        Leave the Studio LOVING the curls, curls, curls!! 
                                        Bring out the best of your natural hair. 
                                        Pricing BEGINS at $100 and increases with length, density.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Creative Natural Style</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Allow the stylist to create an intricate natural hairstyle. 
                                            It may or may not include extension hair. 
                                            Leave the studio a cultures showstopper! 
                                            Pricing begins at $100 and May increase with detail and time required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Natural Braid</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Authentic hair braiding WITHOUT hair added; includes individual braids and/or cornrows. 
                                            Pricing depends upon style/time required. 
                                            Please contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Bantu Knots</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Cultural Bantu knots is a twisting of hair into knots reminiscent of ancient times!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Two-Strand Twists</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Double strand twisting of your hair enhancing your natural hair texture. 
                                            Worn for as twists, once unraveled can be worn as a highly textured 'fro style! 
                                            Price varies upon the size of twists requested and density of hair.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Comb Coils</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Comb twist coils; beautiful and long lasting. 
                                            Pricing depends upon style/time required. 
                                            Please contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Curl Creator</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Shingling process that brings the BEST out of your natural curls! 
                                            Price increase with length, density.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocs" aria-expanded="true" aria-controls="collapseLocs">
                        Locs
                    </button>
                </h2>

                <div id="collapseLocs" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Locs - I'm Worthy Package!</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Give your locs a spa day! 
                                            Treat your crown package includes Loc detox, Loc deep condition treatment, Loc maintenance and the style of your choice! 
                                            Rod sets and pipe cleaner sets are not included but may be added at an additional cost. 
                                            Pricing BEGINS at $175 and increases with length and density.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Traditional Loc Initiaion</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Traditional manipulation of your natural curly hair into Locs. 
                                            Welcome to the Loc tribe! 
                                            Pricing BEGINS at $150 and increases with length, density and size of locs. 
                                            A consultation is REQUIRED before booking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Maintenance - Niblet to Shoulder Length</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Traditional retwisting of Locs, cleaning of parts, assessment and maintenance of loc stem. 
                                            Pricing BEGINS at $100 and increases with length, density of locs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Maintenance - Shoulder to Midback Length</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Traditional retwisting of Locs, cleaning of parts, assessment and maintenance of loc stem. 
                                            Pricing BEGINS at $120 and increases with length, density of locs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Maintenance - Past Midback</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Traditional retwisting of Locs, cleaning of parts, assessment and maintenance of loc stem. 
                                            Price BEGINS at $150 and increases with length, density of locs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Package - Maintenance & Rope Twists Styling</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Cleansing, Retwisting of your locs with rope twist styling. 
                                            Pricing BEGINS at $135 and INCREASES depending upon density, length.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Package - Maintenance & Loc Bob Styling</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Cleansing, Retwisting of locs with Loc styling at it's most creative! 
                                            Pricing BEGINS at $140 and increases with length, density and upon styling time required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Package - Maintenance & Rod Set/Pipes Set</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Select this package if you'd like Loc maintenance and a rod set for ALL the curls!! 
                                            Pricing begins at $140 and increases depending length and density.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Locs - Style</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Loc styling at it's most creative! 
                                            Pricing depends upon styling time required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Repair</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Additional service; repair and restoration of locs. 
                                            Please contact CoCo if repairs are required. 
                                            Pricing depends upon work/time required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Haircut</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Additional service; A customized haircut for your locs designed by your stylist to fit your individual style and preferences. 
                                            Pricing varies on style/time required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Detox</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Purify and cleanse your Locs of imbedded dirt and residue! 
                                            Or detoxify negative energy from your crown. 
                                            Leave the studio feeling refreshed! 
                                            Loc maintenance is not included and will have to be booked in addition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInterlock" aria-expanded="true" aria-controls="collapseInterlock">
                        Interlocking
                    </button>
                </h2>

                <div id="collapseInterlock" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Interlocking Retightening</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Specialized loc maintenance technique using hook tool in order to stabilize and strengthen your locs. 
                                            Pricing BEGINS at $150 and increases depending upon density, time required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Interlocking Package</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Interlocking maintenance with a Premiere Service: Loc Detox, Loc Bob Styling, or Loc Rod Set/Pipe Cleaners Set. 
                                            Pricing BEGINS at $200 and increases with length, density and service selected. 
                                            Please enter the Premiere Service you'd like when booking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">InstaLocs</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Leave the studio instantly Loc'd! 
                                            A consultation is REQUIRED before booking the appointment. 
                                            Pricing BEGINS at $500; a $100 nonrefundable deposit required to hold your appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Extensions</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Installation of pre-made human hair loc extensions. 
                                            Consultation required before being able to book an appointment. 
                                            Pricing varies. Please contact studio for pricing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWicks" aria-expanded="true" aria-controls="collapseWicks">
                        Loc Thickening/Wicks
                    </button>
                </h2>

                <div id="collapseWicks" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Loc Needling</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Loc refining process that assists traditional loc thickening. 
                                            Pricing BEGINS at $375; $100 nonrefundable deposit required to hold your appointment. 
                                            Contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Wicks Installation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Loc thickening at it's FINEST! 
                                            Let us turn your old locs into a crown. 
                                            A consultation is REQUIRED before Wick appointment will be set. 
                                            Contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Wicks Retightening</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Wicks maintenance and retightening. 
                                            Pricing begins at $150 depending upon quantity of wicks and length.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Wicks Repairs</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Are your wicks damaged? Installed incorrectly? Falling apart? 
                                            Book a Wick Repair appointment and allow your crown to be renewed! 
                                            A consultation is REQUIRED before appointment will be approved. 
                                            Pricing varies upon work required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMicro" aria-expanded="true" aria-controls="collapseMicro">
                        MicroLocs/SisterLocs
                    </button>
                </h2>

                <div id="collapseMicro" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">MiniLocs Installation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Intricate loc technique that creates smaller, locs allowing for greater styling options. 
                                            Pricing increases with length, density. 
                                            A consultation and $200 nonrefundable deposit required to book the appointment. 
                                            Please contact the studio with any questions. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">MicroLoc Installation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Intricate loc technique that creates smaller, micro-locs allowing for greater styling options.
                                            Pricing increases with length and density.
                                            A consultation and $200 nonrefundable deposit required to book the appointment. 
                                            Please contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Mini/Micro Loc Retightening</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Price BEGINS at $225 depending upon density/time required; If you have over 300 locs, please know that you will pay more. 
                                            A $50 nonrefundable deposit is required to hold the appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Sisterlock Retightening</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Price BEGINS at $275 depending upon density/time required; If you have over 400 locs, please know that you will pay more. 
                                            A $50 nonrefundable deposit is required to hold the appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Sisterlock Shampoo/Condition/Separation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Treat your Sisterlocks to a relaxing shampoo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Sisterlock Installation</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Transform your natural hair into a beautiful crown of Sisterlocks! 
                                            Sisterlock installation includes the consult, the install, and the first retightening. 
                                            The tried and true Sisterlock method is implemented. 
                                            Pricing varies upon length and density. 
                                            Please contact the studio with any questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTreatment" aria-expanded="true" aria-controls="collapseTreatment">
                        Treatments
                    </button>
                </h2>

                <div id="collapseTreatment" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Master Moisturizing Hot Oil Treatment</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Nourish your hair with our handcrafted hair oil that penetrates, moisturizes and enhances flexibility.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Color Service</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Add pops of color to your hair and freshen up your 'do! 
                                            Please contact the studio before booking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Protein Treatment</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Deep condition that strengthens.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePremiere" aria-expanded="true" aria-controls="collapsePremiere">
                        Premiere Packages
                    </button>
                </h2>

                <div id="collapsePremiere" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Studio Selah Bridal Package</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Deluxe package prepares the bride to be her Beautiful Best for her wedding day! \
                                            Contact the studio to arrange.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card">
                                    <h5 className="card-header pt-2">Studio Selah Groom Package</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Deluxe package prepares the groom to be a King on his wedding day! 
                                            Contact the studio to arrange.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">Travel To You</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            Contact the Studio to set up an appointment where we come to you! 
                                            Studio Selah Nola offers on site Natural Hair Services to all clients from the elderly to professionals and movie sets!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button fw-medium collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClasses" aria-expanded="true" aria-controls="collapseClasses">
                        CLASSES!
                    </button>
                </h2>

                <div id="collapseClasses" className="accordion-collapse collapse" data-bs-parent="#serviceAccor">
                    <div className="accordion-body">

                        <div className="row mt-3">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <div class="card">
                                    <h5 className="card-header pt-2">MASTER MICROLOCS CLASS!</h5>
                                    <div class="card-body">
                                        <p class="card-text">
                                            ATTENTION! TODAY IS THE DATE TO BEGIN A NEW CAREER!! LEARN HOW TO INSTALL MICROLOCS! <br />
                                            <br />
                                            INTRUCTIONS INCLUDE:
                                            <ul>
                                                <li>CONSULTATION</li>
                                                <li>HAIR TEXTURES</li>
                                                <li>GRID LAYOUT</li>
                                                <li>PROPER TECHNIQUE</li>
                                                <li>CORRECT TOOLS</li>
                                                <li>PRICING AND MARKETING</li>
                                            </ul>
                                            
                                            INCLUDED IN COST:
                                            <ul>
                                                <li>HAND'S ON TEACHING</li>
                                                <li>MANNEQUIN HEAD & STAND</li>
                                                <li>STYLING TOOLS</li>
                                                <li>INTERLOCKING TOOLS</li>
                                                <li>GUIDE MANUAL</li>
                                                <li>FOLLOW-UP VIDEO CONSULT WITH YOUR FIRST CLIENT</li>
                                            </ul>

                                            **CLASS IS 9AM-4PM <br />
                                            ***NO RECORDING OF CLASS IS ALLOWED.***
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}