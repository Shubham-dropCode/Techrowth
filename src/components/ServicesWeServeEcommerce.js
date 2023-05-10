import styles from "./ServicesWeServeEcommerce.module.css";
const ServicesWeServeEcommerce = () => {
  return (
    <div className={styles.servicesWeServe}>
      <div className={styles.seconePageECommerceParent}>
        <div className={styles.seconePageECommerce}>
          <div className={styles.mnParent}>
            <div className={styles.div}>144 Mn+</div>
            <div className={styles.totalRevenueGenerated}>
              Total Revenue Generated
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>34%</div>
            <div className={styles.revenueIncreasedWrapper}>
              <div className={styles.revenueIncreased}> Revenue Increased</div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.div}>55%</div>
            <div className={styles.salesIncreased}>Sales Increased</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.servicesWeServeParent}>
            <b className={styles.servicesWeServe1}>Services we serve</b>
            <div className={styles.technologicalInfrastructureWWrapper}>
              <div style={{ fontWeight: "500" }}>
                Technological Infrastructure we Employ
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-438.svg"
                />
                <div className={styles.explainerVideos}>Explainer Videos</div>
              </div>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-421.svg"
                />
                <div className={styles.productListings}>Product Listings</div>
              </div>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-424.svg"
                />
                <div className={styles.eCommerceSeo}>E-commerce SEO</div>
              </div>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-426.svg"
                />
                <div className={styles.eCommercePpc}>E-commerce PPC</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-428.svg"
                />
                <div className={styles.socialMediaShops}>
                  Social Media Shops
                </div>
              </div>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-430.svg"
                />
                <div className={styles.googleShop}>Google Shop</div>
              </div>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-432.svg"
                />
                <div className={styles.paymentGateways}>Payment Gateways</div>
              </div>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-434.svg"
                />
                <div className={styles.customerSupportTools}>
                  Customer Support Tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeServeEcommerce;
