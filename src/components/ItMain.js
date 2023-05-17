import ContactUsBar from "./ContactUsBar";
import styles from "./ItMain.module.css";
import Testimonial from "../components/Testimonial";
import ExploreOurCaseStudies from "../components/ExploreOurCaseStudies";
import FrameComponent from "../components/FrameComponent";
import IndustriesWorkedWith from "../components/IndustiresWorkedWIth";
import AccelerateYourGrowth from "./AccelerateYourGrowth";
const ItMain = () => {
  const RecentText =
    "Ready to take your business to new heights? Book a free consultation today and know more";
  return (
    <div className={styles.itMain}>
      <div className={styles.frameParent}>
        <div className={styles.oneStopSolutionParent}>
          <b className={styles.oneStopSolution}>One Stop Solution</b>
          <div
            className={styles.resultDrivenIt}
          >{`Result driven IT & Digital Marketing Consultancy`}</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div}>7+</div>
            <div className={styles.yearsOfAverageContainer}>
              <p className={styles.yearsOfAverage}> Years of Average</p>
              <p className={styles.yearsOfAverage}>Team Experience</p>
            </div>
          </div>

          <div className={styles.parent}>
            <div className={styles.div}>200+</div>
            <div className={styles.yearsOfAverageContainer}>
              Subject Matter Experts
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.technology}>114+</div>
            <div className={styles.clientTestimonials}>Client Testimonials</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>100%</div>
            <div className={styles.yearsOfAverageContainer}>
              Prove Track <br></br>Record
            </div>
          </div>
        </div>
      </div>
      <ContactUsBar content={RecentText} btnTxt="Contact Us" />
      {/* <ItMainCounter/> */}
      <div className={styles.frameParent8}>
        <div className={styles.howToPickYourItFirmParent}>
          <div className={styles.n1Parent}>
            <img
              className={styles.n1Icon}
              alt=""
              src="/324417929-476612977997303-8923770136300221903-n-1@2x.png"
            />
            <img className={styles.izb1Icon} alt="" src="/izb-1@2x.png" />
            <img className={styles.izb1Icon} alt="" src="/amigo-1@2x.png" />
            <img className={styles.izb1Icon} alt="" src="/logos03-1@2x.png" />
            <img
              className={styles.izb1Icon}
              alt=""
              src="/tasmai-logo-1@2x.png"
            />
            <div className={styles.mainLogo1Wrapper}>
              <img
                className={styles.izb1Icon}
                alt=""
                src="/main-logo-1@2x.png"
              />
            </div>
            <img
              className={styles.izb1Icon}
              alt=""
              src="/abhey-logo-1@2x.png"
            />
          </div>
          <div className={styles.whatsappImage20230131At1Parent}>
            <div className={styles.whatsappImage20230131At1} />
            <div className={styles.ggLogo1Parent}>
              <img className={styles.ggLogo1} alt="" src="/gg-logo-1@2x.png" />
              <img
                className={styles.frameChild7}
                alt=""
                src="/frame-664@2x.png"
              />
              <img className={styles.icon} alt="" src="/260-1@2x.png" />
              <img
                className={styles.prakashJewellers5CreamColoIcon}
                alt=""
                src="/prakashjewellers5-cream-color-1@2x.png"
              />
              <img
                className={styles.frameChild8}
                alt=""
                src="/frame-662@2x.png"
              />
              <img
                className={styles.frameChild9}
                alt=""
                src="/frame-663@2x.png"
              />
              <img
                className={styles.greenviewMedicalCenterBangaIcon}
                alt=""
                src="/greenviewmedicalcenterbangalore-1-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.n1Parent}>
            <img
              className={styles.n1Icon}
              alt=""
              src="/whatsapp-image-20230131-at-1724-1@2x.png"
            />
            <img
              className={styles.izb1Icon}
              alt=""
              src="/whatsapp-image-20230131-at-1813-1@2x.png"
            />
            <img
              className={styles.n1Icon}
              alt=""
              src="/whatsapp-image-20230131-at-1809-2@2x.png"
            />
            <img
              className={styles.izb1Icon}
              alt=""
              src="/bluelogo2png-1@2x.png"
            />
            <img
              className={styles.n1Icon}
              alt=""
              src="/whatsapp-image-20230131-at-1809-1@2x.png"
            />
            <img className={styles.izb1Icon} alt="" src="/sobilogo-1@2x.png" />
            <img
              className={styles.izb1Icon}
              alt=""
              src="/tecseek-logo01-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.whatsappImage20230131At1Container}>
          <img
            className={styles.izb1Icon}
            alt=""
            src="/whatsapp-image-20230131-at-1727-1@2x.png"
          />
          <img
            className={styles.logoArtworkWihte061}
            alt=""
            src="/logo-artwork-wihte06-1@2x.png"
          />
          <img
            className={styles.n1Icon}
            alt=""
            src="/whatsapp-image-20230131-at-1702-1@2x.png"
          />
        </div>
      </div>

      <div className={styles.digite}>
        <div className={styles.frameParent10}>
          <div className={styles.frameParent11}>
            <div className={styles.logo1Parent}>
              <b className={styles.b}>$8,907,408</b>
              <div className={styles.marketingBudgetsSpent}>
                Marketing Budgets Spent
              </div>
            </div>
            <div className={styles.logo1Parent}>
              <b className={styles.b1}>172+</b>
              <div className={styles.mobileApplicationsDeveloped}>
                Mobile Applications
                <br /> Developed
              </div>
            </div>
            <div className={styles.logo1Parent}>
              <b className={styles.b2}>$144,067,504</b>
              <div className={styles.revenueGenerated}>Revenue Generated</div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.parent4}>
              <b className={styles.b3}>50+</b>
              <div className={styles.standAloneSoftwares}>
                Stand Alone Softwares
              </div>
            </div>
            <div className={styles.parent5}>
              <b className={styles.b4}>100+</b>
              <div className={styles.satisfiedClients}>Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.groupParent1}>
        <div className={styles.accelerateYourGrowthHeadingParent}>
          <div className={styles.accelerateYourGrowthHeading}>
            <b className={styles.accelerateYourGrowth}>
              Accelerate Your Growth
            </b>
            <div className={styles.withOurVersatile}>
              with Our Versatile Technology Proficiency
            </div>
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild2} />
              <div className={styles.marketing}>Marketing</div>
            </div>
            <div className={styles.technologyWrapper}>
              <div className={styles.technology}>Technology</div>
            </div>
            <div className={styles.analyticsWrapper}>
              <div className={styles.analytics}>Analytics</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent3}>
          <img className={styles.groupIcon} alt="" src="/group-358.svg" />
          <div className={styles.sqlDataBaseWithLogoParent}>
            <img
              className={styles.sqlDataBaseWithLogoIcon}
              alt=""
              src="/sql-data-base-with-logo@2x.png"
            />
            <img
              className={styles.sqlDataBaseWithLogoIcon}
              alt=""
              src="/googleflutterlogo@2x.png"
            />
            <img
              className={styles.angularAr21Icon}
              alt=""
              src="/angularar21@2x.png"
            />
            <img
              className={styles.sqlDataBaseWithLogoIcon}
              alt=""
              src="/react-logo-wordmark@2x.png"
            />
            <img
              className={styles.sqlDataBaseWithLogoIcon}
              alt=""
              src="/javalogo@2x.png"
            />
          </div>
          <img className={styles.groupIcon} alt="" src="/group-359.svg" />
        </div>
      </div> */}
      <AccelerateYourGrowth />

      <div className={styles.problemsWeHaveSolvedParent}>
        <div className={styles.exploreOtherServices}>
          Problems We have Solved
        </div>
        <div className={styles.frameParent13}>
          <div className={styles.frameParent14}>
            <div className={styles.groupParent4}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-739.svg"
              />
              <div className={styles.aNeedFor}>
                A need for complex functionality in your software
              </div>
            </div>
            <div className={styles.groupParent4}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-740.svg"
              />
              <div className={styles.improvingUserEngagement}>
                Improving user engagement and accessibility
              </div>
            </div>
            <div className={styles.groupParent6}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-741.svg"
              />
              <div className={styles.securityRequirementBased}>
                Security Requirement Based on Threat Vectors
              </div>
            </div>
            <div className={styles.groupParent4}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-742.svg"
              />
              <div className={styles.avoidBreachesAnd}>
                Avoid breaches and downtime in the organization's
                infrastructure.
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.groupParent8}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-743.svg"
              />
              <div className={styles.improvingNetworkSecurity}>
                Improving Network Security Performance
              </div>
            </div>
            <div className={styles.groupParent9}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-744.svg"
              />
              <div className={styles.chatBotAndThirdParty}>
                Chat-bot and third-party software integration
              </div>
            </div>
            <div className={styles.groupParent9}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-745.svg"
              />
              <div className={styles.incorporationOfCloudHosted}>
                Incorporation of cloud-hosted databases
              </div>
            </div>
            <div className={styles.groupParent9}>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-746.svg"
              />
              <div className={styles.theRiskOf}>
                The risk of software failure due to software errors and bugs
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <div className={styles.cta}>
          <img
            className={styles.ctaChild}
            alt=""
            src="/rectangle-4029@2x.png"
          />
          <div className={styles.doYouHaveASimilarProblemParent}>
            <div className={styles.doYouHaveContainer}>
              <p className={styles.yearsOfAverage}>
                Do you have a Similar Problem?
              </p>
              <p className={styles.yearsOfAverage}>
                Book a free consultation today and discover the world of
                Result-Driven, growth.
              </p>
            </div>
            <div className={styles.rectangleParent2}>
              <button className={styles.rectangleButton} />
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent16}>
        <div className={styles.transformYourIdeasIntoRealParent}>
          <b className={styles.transformYourIdeas}>
            Transform Your Ideas Into Reality
          </b>
          <div className={styles.letUsGuide}>
            Let us guide you using our Expertly Crafted IT Services
          </div>
        </div>
        <div className={styles.groupParent9}>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild3} />
            <div className={styles.frameParent17}>
              <div className={styles.frameParent18}>
                <img
                  className={styles.frameChild19}
                  alt=""
                  src="/frame-725@2x.png"
                />
                <div className={styles.development}>Development</div>
              </div>
              <div className={styles.realizeTheFull}>
                Realize the full potential of your idea with our develop ...
              </div>
              <div className={styles.lineParent}>
                <img className={styles.lineIcon} alt="" src="/line-50.svg" />
                <div className={styles.exploreMore}>Explore More.....</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild4} />
            <div className={styles.uiuxInteractiveParent}>
              <div className={styles.uiuxInteractive}>UI/UX Interactive</div>
              <div className={styles.aTeamOf}>
                A team of experts, for all your UI/UX Solution ...
              </div>
              <div className={styles.lineGroup}>
                <img className={styles.lineIcon} alt="" src="/line-501.svg" />
                <div className={styles.exploreMore}>Explore More.....</div>
              </div>
              <img
                className={styles.groupChild5}
                alt=""
                src="/frame-726@2x.png"
              />
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild4} />
            <div className={styles.itManagementParent}>
              <div className={styles.itManagement}>IT Management</div>
              <div className={styles.letUsHelp}>
                Let us help you neutralize the anxiety and handle ...
              </div>
              <div className={styles.lineContainer}>
                <img className={styles.lineIcon} alt="" src="/line-501.svg" />
                <div className={styles.exploreMore}>Explore More.....</div>
              </div>
              <img
                className={styles.groupChild7}
                alt=""
                src="/frame-734@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.groupParent13}>
          <div className={styles.rectangleParent3}>
            <div className={styles.rectangleFrame}>
              <div className={styles.groupChild3} />
            </div>
            <div className={styles.qualityTestingParent}>
              <div className={styles.qualityTesting}>Quality Testing</div>
              <div className={styles.ourExpertsDeliver}>
                Our experts, deliver you a Consistency you deserve ...
              </div>
              <div className={styles.lineParent1}>
                <img className={styles.lineIcon} alt="" src="/line-501.svg" />
                <div className={styles.exploreMore}>Explore More.....</div>
              </div>
              <img
                className={styles.groupChild5}
                alt=""
                src="/frame-728@2x.png"
              />
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild3} />
            <div className={styles.integrationsParent}>
              <div className={styles.qualityTesting}>Integrations</div>
              <div className={styles.letPowerOf}>
                Let power of technology, be on your side. Unlock the full ...
              </div>
              <div className={styles.lineParent2}>
                <img className={styles.lineIcon} alt="" src="/line-501.svg" />
                <div className={styles.exploreMore}>Explore More.....</div>
              </div>
              <img
                className={styles.groupChild5}
                alt=""
                src="/frame-730@2x.png"
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      {/* <div className={styles.discoverWhy100ClientsRaveWrapper}>
        <div className={styles.discoverWhy100Container}>
          <span>{`Discover why `}</span>
          <b className={styles.clients}>100+ Clients</b>
          <span> rave about our services</span>
        </div>
      </div>
      <div className={styles.itMainInner}>
        <div className={styles.frameWrapper12}>
          <div className={styles.groupParent15}>
            <img className={styles.groupIcon} alt="" src="/group-3581.svg" />
            <div className={styles.groupParent16}>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild12} />
                <div className={styles.groupChild13} />
              </div>
              <div className={styles.frameParent19}>
                <div className={styles.logo1Parent}>
                  <img
                    className={styles.logo1Icon}
                    alt=""
                    src="/logo-1@2x.png"
                  />
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
                <div className={styles.ourCompanyHasContainer}>
                  <p className={styles.yearsOfAverage}>
                    "Our company has been using their IT services for over a
                    year now and we have seen a remarkable improvement in our
                    technology infrastructure." 
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.groupParent16}>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild12} />
                <div className={styles.groupChild13} />
              </div>
              <div className={styles.frameParent20}>
                <div className={styles.logo1Parent}>
                  <img
                    className={styles.originalLogoB1Icon}
                    alt=""
                    src="/260-original-logo-b-1@2x.png"
                  />
                  <img className={styles.groupIcon2} alt="" src="/group1.svg" />
                </div>
                <div className={styles.thisIsA}>
                  "This is a team of highly-skilled developers and IT solutions
                  providers. I enjoyed working with them on various projects
                  from software design through development. Thank you for your
                  services and exceeding my expectations."
                </div>
              </div>
            </div>
            <div className={styles.groupParent16}>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild12} />
                <div className={styles.groupChild13} />
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.logo1Parent}>
                  <img
                    className={styles.abhayahastaLogo1}
                    alt=""
                    src="/abhayahasta-logo-1@2x.png"
                  />
                  <img className={styles.groupIcon3} alt="" src="/group2.svg" />
                </div>
                <div className={styles.thisIsA1}>
                  "This is a team of highly-skilled developers and IT solutions
                  provider enjoyed working with them on various projects from
                  software design through development. Thank you for your
                  services and exceeding my expectations."
                </div>
              </div>
            </div>
            <div className={styles.groupParent16}>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild12} />
                <div className={styles.groupChild13} />
              </div>
              <div className={styles.frameParent22}>
                <div className={styles.logo1Parent}>
                  <img
                    className={styles.logo2Icon}
                    alt=""
                    src="/logo-2@2x.png"
                  />
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
                <div className={styles.weveBeenWorking}>
                  We've been working with this IT services company for several
                  years now and they have been an invaluable partner to our
                  organization. Their team is always available and consistently
                  provides high-quality support, which has allowed us to focus
                  on growing our business with peace of mind."
                </div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-3591.svg" />
          </div>
        </div>
      </div> */}
      <div className={styles.frameParent23}>
        <div className={styles.kracParent}>
          <div className={styles.exploreOtherServices}>KRAC</div>
          <div className={styles.aSoftwareDelivery}>
            A Software Delivery Method cracking the toughest codes with
            copacetic approach of dissecting them down 
          </div>
        </div>
        <div className={styles.iconSymbole1Parent}>
          <img className={styles.iconSymbole1} alt="" src="/KRACimg.png" />
        </div>

        <div className={styles.experienceASoftwareDevelopmParent}>
          <div className={styles.experienceASoftwareContainer}>
            <span>{`Experience a software development cycle that really kicks it up a notch with `}</span>
            <span className={styles.span}>KRAC</span>
            <span>{`. Our process has cracked the code to efficient software delivery, boasting a `}</span>
            <span className={styles.span}>30%</span>
            <span> increased efficiency.</span>
          </div>
          <div className={styles.weKickIt}>
            We kick it off with discussions about your software requirements and
            business intentions, which help us create a highly accurate roadmap
            for the development phase. From there, precise actions are taken
            towards the fulfillment of a thoroughly tested final product. Our
            process is transparent for the client and easy to monitor, making
            the closure phase of the final product handoff simple and
            stress-free for any business. 
          </div>
        </div>
        {/* <div className={styles.frameParent24}>
          <div className={styles.frameParent25}>
            <div className={styles.groupParent20}>
              <div className={styles.lineParent3}>
                <div className={styles.lineDiv} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-31.svg"
                  />
                  <div className={styles.k}>K </div>
                </div>
              </div>
              <div className={styles.discussBusinessIntentionsContainer}>
                <ul className={styles.discussBusinessIntentionsN}>
                  <li className={styles.discussBusinessIntentions}>
                    Discuss business intentions, needs, and goals for the
                    software
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Gather critical information about technological needs and
                    assess current IT infrastructure
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Propose tailored solution to improve the situation or
                    achieve objectives
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.groupParent20}>
              <div className={styles.lineParent3}>
                <div className={styles.lineDiv} />
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-31.svg"
                  />
                  <div className={styles.r}>R</div>
                </div>
              </div>
              <div className={styles.projectManagementTeamContainer}>
                <ul className={styles.discussBusinessIntentionsN}>
                  <li className={styles.discussBusinessIntentions}>
                    Project management team creates comprehensive plan to
                    address technological needs
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Plan is based on business intelligence and documentation of
                    deployment plan, version management tactics, budgeting, and
                    timeline
                  </li>
                  <li>
                    Quality of tools and technology used is dictated by proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.frameParent26}>
            <div className={styles.groupParent22}>
              <div className={styles.lineParent3}>
                <div className={styles.groupChild22} />
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.a}>A</div>
                </div>
              </div>
              <div className={styles.uiuxDesignTeamContainer}>
                <ul className={styles.discussBusinessIntentionsN}>
                  <li className={styles.discussBusinessIntentions}>
                    UI/UX design team uses latest technology to create
                    user-friendly interface
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Software is developed and tested rigorously
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Issues and bugs are identified and addressed promptly
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.groupParent23}>
              <div className={styles.lineParent6}>
                <div className={styles.groupChild24} />
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.groupChild25}
                    alt=""
                    src="/ellipse-88.svg"
                  />
                  <div className={styles.c}>C</div>
                </div>
              </div>
              <div className={styles.softwareIsDeliveredContainer}>
                <ul className={styles.discussBusinessIntentionsN}>
                  <li className={styles.discussBusinessIntentions}>
                    Software is delivered and deployed with comprehensive
                    documentation and training provided
                  </li>
                  <li className={styles.discussBusinessIntentions}>
                    Ongoing support is provided to ensure software remains
                    up-to-date and fully functional
                  </li>
                  <li>
                    Client is equipped with knowledge and tools to maintain
                    software after handover
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <FrameComponent />
      </div>
      <ExploreOurCaseStudies />
      <ContactUsBar
        content="Wondering if you can get the right expert? Book a free consultation today and become part of a success story!"
        btnTxt="Contact Us"
      />
      <div className={styles.frameParent27}>
        <div className={styles.howToPickYourItFirmParent}>
          <div className={styles.intent}>How to pick your IT firm? </div>
          <div className={styles.topFactorsInvolved}>
            Top factors involved in cracking the code of a successful software
            delivery. 
          </div>
        </div>
        <div className={styles.frameParent28}>
          <div className={styles.frameParent29}>
            <div className={styles.frameParent30}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-774@2x.png"
              />
              <div className={styles.expertiseAndExperience}>
                Expertise and experience
              </div>
            </div>
            <div className={styles.frameParent31}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-775@2x.png"
              />
              <div className={styles.flexibleAndCustomizableContainer}>
                <p className={styles.yearsOfAverage}>{`Flexible and `}</p>
                <p className={styles.yearsOfAverage}>customizable solutions</p>
              </div>
            </div>
            <div className={styles.frameParent31}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-777@2x.png"
              />
              <div className={styles.securityAndCompliance}>
                Security and compliance
              </div>
            </div>
          </div>
          <div className={styles.frameParent33}>
            <div className={styles.frameParent31}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-773@2x.png"
              />
              <div className={styles.customerCentricApproach}>
                Customer-centric approach
              </div>
            </div>
            <div className={styles.frameParent31}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-776@2x.png"
              />
              <div className={styles.timelySupportAndContainer}>
                <p className={styles.yearsOfAverage}>Timely support and</p>
                <p className={styles.yearsOfAverage}>maintenance</p>
              </div>
            </div>
            <div className={styles.frameParent31}>
              <img
                className={styles.frameChild26}
                alt=""
                src="/frame-778@2x.png"
              />
              <div className={styles.competitivePricing}>
                Competitive pricing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itMainChild}>
        <div className={styles.weveDrivenOver548623LeadParent}>
          <div className={styles.weveDrivenOverContainer}>
            <span
              className={styles.weveDrivenOver}
            >{`We’ve driven over `}</span>
            <b className={styles.b5}>
              548,623 <br />
            </b>
            <span className={styles.weveDrivenOver}> Leads for clients </span>
          </div>
          <div className={styles.frameParent37}>
            <div className={styles.howToPickYourItFirmParent}>
              <div className={styles.div4}>24%</div>
              <div className={styles.revenueIncrement}>
                <p className={styles.yearsOfAverage}>{`Revenue `}</p>
                <p className={styles.yearsOfAverage}>Increment </p>
              </div>
            </div>
            <div className={styles.howToPickYourItFirmParent}>
              <div className={styles.div5}>21%</div>
              <div className={styles.socialMediaEngagementContainer}>
                <p className={styles.yearsOfAverage}>Social Media</p>
                <p className={styles.yearsOfAverage}>{`Engagement `}</p>
                <p className={styles.yearsOfAverage}>Increment</p>
              </div>
            </div>
            <div className={styles.parent8}>
              <div className={styles.div6}>9% </div>
              <div className={styles.conversionRateIncrement}>
                Conversion Rate Increment 
              </div>
            </div>
            <div className={styles.howToPickYourItFirmParent}>
              <div className={styles.div7}>36%</div>
              <div className={styles.customerInteractionIncrement}>
                Customer Interaction Increment 
              </div>
            </div>
          </div>
          <div className={styles.frameChild32} />
          <div className={styles.areYouPreparedToExpandYouParent}>
            <div className={styles.areYouPreparedContainer}>
              <p
                className={styles.yearsOfAverage}
              >{`Are you prepared to expand your company to new heights? `}</p>
              <p className={styles.yearsOfAverage}>
                Book a free consultation today! 
              </p>
            </div>
            <div className={styles.rectangleParent2}>
              <button className={styles.rectangleButton} />
              <div className={styles.contactUs}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.itMainInner1}>
        <div className={styles.industriesWeveWorkedWithParent}>
          <div className={styles.industriesWeveWorked}>
            Industries we’ve worked with
          </div>
          <div className={styles.groupParent24}>
            <div className={styles.rectangleParent12}>
              <div className={styles.groupChild27} />
              <div className={styles.groupChild28} />
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-556.svg"
                />
                <div className={styles.automotive}>Automotive</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.groupParent27}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-557.svg"
                />
                <div className={styles.automotive}>Banking</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.groupParent29}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-558.svg"
                />
                <div className={styles.automotive}>Financial</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.frameParent20}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-559.svg"
                />
                <div className={styles.automotive}>Healthcare</div>
              </div>
            </div>
          </div>
          <div className={styles.groupParent24}>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.groupParent34}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-774.svg"
                />
                <div className={styles.manufacturing}>Manufacturing</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/Realstates.png"
                />
                <div className={styles.automotive}>Real Estate</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.groupGroup}>
                <img className={styles.frameChild33} alt="" src="/group7.svg" />
                <div className={styles.retail}>Retail</div>
              </div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.rectangleParent13}>
                <div className={styles.groupChild27} />
                <div className={styles.groupChild28} />
              </div>
              <div className={styles.groupParent38}>
                <img
                  className={styles.frameChild33}
                  alt=""
                  src="/group-568.svg"
                />
                <div className={styles.travel}>Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <IndustriesWorkedWith />

      <div className={styles.exploreOtherServicesParent}>
        <div className={styles.exploreOtherServices}>
          Explore Other Services
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.groupParent}>
                <div className={styles.groupParent}>
                  <div className={styles.groupChild} />
                </div>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/frame-1081@2x.png"
                />
                <div
                  className={styles.digitalMarketing}
                >{`Digital Marketing `}</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className={styles.unlockThePotential}>
              Unlock the potential of your brand and seize future growth
              opportunities with our result-driven strategies. Our extensive
              digital channels can help you reach a wider audience, boost brand
              visibility, and drive growth.
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent2}>
                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + "ps-1"}
                    alt=""
                    src="/frame-1128@2x.png"
                    width={35}
                  />
                  Intent{" "}
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1130@2x.png"
                    width={35}
                  />
                  Services{" "}
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1131@2x.png"
                    width={35}
                  />
                  E-commerce
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1130@2x.png"
                    width={35}
                  />
                  Content{" "}
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1133@2x.png"
                    width={35}
                  />
                  Graphic & Designs{" "}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.unlockThePowerOfDataEleParent}>
              <div className={styles.unlockThePower}>
                Unlock the power of data - elevate your performance with our
                Analytics services 
              </div>
              <div className={styles.groupContainer}>
              <button
                  className="btn btn-light w-100 mr-1"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1139@2x.png"
                    width={35}
                  />
                  Analytics & Insights
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1140@2x.png"
                    width={35}
                  />
                  Customized Dashboards
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1141@2x.png"
                    width={35}
                  />
                 Social Media Analytics
                </button>

                <button
                  className="btn btn-light w-100"
                  style={{
                    fontSize: "18px",
                    width: "18.3rem",
                    height: "3.75rem",
                    fontWeight: "600",
                    color: "#0076A2",
                    textAlign: "start",
                  }}
                >
                  <img
                    className={styles.frameItem + " mr-1"}
                    alt=""
                    src="/frame-1142@2x.png"
                    width={35}
                  />
                  Mobile Analytics{" "}
                </button>
                
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupInner} />
              <div className={styles.businessAnalyticsParent}>
                <div className={styles.businessAnalytics}>
                  Business Analytics
                </div>
                <img
                  className={styles.arrowRightIcon1}
                  alt=""
                  src="/arrowright1.svg"
                />
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/frame-1094@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItMain;
