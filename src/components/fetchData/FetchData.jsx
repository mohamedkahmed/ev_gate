import { useState, useEffect } from "react";
import { createClient } from "contentful";


function checkURLProtocal(url){
    const rgex = /http(s)/gi;
const newURL = rgex.test(url) ? url : `https:${url}`;
    return newURL;
};


/* home sliders */

const homeSlideContent = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "6eqbwhAsi1jViCum4ZYuZrEV-gqPNuEUop52wf9D_mQ"
})

export const useFetchHomeSlider = () => {
    const [loading, setLoading] = useState(true)
    const [homeslider, setHomeSlider] = useState([])
    const getData = async() => {
        try {
            const response = await homeSlideContent.getEntries({ content_type: "homeSlider"});
            const homeSlider = response.items.map((item) => {
                const {title, desc, img, sliderPlay, sliderApp, loadApp, url} = item.fields
                const id = item.sys.id
                const image = img?.fields?.file?.url
                const googleImage = sliderPlay?.fields?.file?.url
                const appImage = sliderApp?.fields?.file?.url
                return {title, id, desc, image, googleImage, appImage, loadApp, url}
            })
            setHomeSlider(homeSlider)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, homeslider}
}


/* roadmap */

const homeRoadmap = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "DqWeUZehyvo_nIimqH2x_QeHPe9EcwPqyALuNctHZV0"
})

export const useFetchRoadmap = () => {
    const [loading, setLoading] = useState(true)
    const [roadmmap, setRoadmap] = useState([])
    const getData = async() => {
        try {
            const response = await homeRoadmap.getEntries({ content_type: "roadmap" });
            const roadmap = response.items.map((item) => {
              const { desktopRoadMap, mobileRoadMap } = item.fields;
              const id = item.sys.id;
              const deskRoad = checkURLProtocal(desktopRoadMap?.fields?.file?.url);
              const mobileRoad = checkURLProtocal(mobileRoadMap?.fields?.file?.url);
              return {id ,deskRoad, mobileRoad };
            })
            setRoadmap(roadmap)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, roadmmap}
}


/* portal mamagement system */


const portalManageSyetem = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "erhEIfu4de1j7b4tjvtq6SWDLbIzPGoRucuFQ5hHVEI"
})

export const useFetchPortal = () => {
    const [loading, setLoading] = useState(true)
    const [portalManage, setPotalManage] = useState([])
    const getData = async() => {
        try {
            const response = await portalManageSyetem.getEntries({ content_type: "portalManageSystem"});
            const portalManageSystem = response.items.map((item) => {
                const {mainTitle, title, desc, img,right} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(img?.fields?.file?.url)
                return {mainTitle, title, id, desc, image, right}
            })
            setPotalManage(portalManageSystem)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, portalManage}
}

/* cover portal mamagement system */


const coverPortalSingle = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "7IzOB_kOqlRfwRbEflIdEIfzsOlkKfrBbnmvXqkLtpA"
})

export const useFetchCoverPortalPage = () => {
    const [loading, setLoading] = useState(true)
    const [coverportalManage, setCoverPotalManage] = useState([])
    const getData = async() => {
        try {
            const response = await coverPortalSingle.getEntries({ content_type: "coverPortalSinglePage"});
            const coverPortalSinglePage = response.items.map((item) => {
                const {pTitle, pDescription, login, pImg} = item.fields
                const id = item.sys.id
                const pImage = checkURLProtocal(pImg?.fields?.file?.url)
                return {id, pTitle, pDescription, login, pImage}
            })
            setCoverPotalManage(coverPortalSinglePage)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, coverportalManage}
}


/* cover App mamagement system */


const coverAppSingle = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "M58Fy7__pKjCmIMTb_1iCvZ4rkYf5LoYNT4aU__9JFE"
})

export const useFetchCoverAppPage = () => {
    const [loading, setLoading] = useState(true)
    const [coverAppManage, setCoverAppManage] = useState([])
    const getData = async() => {
        try {
            const response = await coverAppSingle.getEntries({ content_type: "coverAppSinglePage"});
            const coverAppSinglePage = response.items.map((item) => {
                const {appTitle, appDescription, sliderPlay, sliderApp ,loadApp, appImg} = item.fields
                const id = item.sys.id
                const aImage = checkURLProtocal(appImg?.fields?.file?.url)
                const googleImage = checkURLProtocal(sliderPlay?.fields?.file?.url)
                const appImage = checkURLProtocal(sliderApp?.fields?.file?.url)
                return {id, appTitle, appDescription, loadApp, appImage, aImage, googleImage}
            })
            setCoverAppManage(coverAppSinglePage)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, coverAppManage}
}


/* app mamagement system */


const appManageSyetem = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "Gs_fvl302qnNh8ebUc0_IHZOD4Fq214Z2EL3t_KQSis"
})

export const useFetchAppManage = () => {
    const [loading, setLoading] = useState(true)
    const [appManage, setAppManage] = useState([])
    const getData = async() => {
        try {
            const response = await appManageSyetem.getEntries({ content_type: "appManageSystem"});
            const appManageSystem = response.items.map((item) => {
                const {mainTitle, title, desc, img} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(img?.fields?.file?.url)
                return {mainTitle, title, id, desc, image}
            })
            setAppManage(appManageSystem)
            setLoading(false)
            
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, appManage}
}




/* about features */


const aboutFeaturess = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "Dcqr2aFbXSKNBucERPqRf1ynXtUdWtF5yFtsJKfGc1I"
})

export const useFetchAboutFeatures = () => {
    const [loading, setLoading] = useState(true)
    const [aboutFeat, setAaboutFeat] = useState([])
    const getData = async() => {
        try {
            const response = await aboutFeaturess.getEntries({ content_type: "aboutFeatures"});
            const aboutFeatures = response.items.map((item) => {
                const {title, num, iconImage} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(iconImage?.fields?.file?.url)
                return {title, id,image, num}
            })
            setAaboutFeat(aboutFeatures)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, aboutFeat}
}


const ourCompaniesPage = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "TJqHoOBJWBzXPd42SQdT29HpDQ4HpmfesY1A2KkuBsY",
  });
  
  export const useFetchOurCompanies = () => {
    const [loading, setLoading] = useState(true);
    const [ourCompanies, setOurCompanies] = useState([]);
    const getData = async () => {
      try {
        const response = await ourCompaniesPage.getEntries({ content_type: "ourCompanies" });
        const ourCompanies = response.items.map((item) => {
          const { img, logo, para1, para2, brandImg, arrowColor, idTitle, sideImg } = item.fields;
          const id = item.sys.id;
          const image = checkURLProtocal(img?.fields?.file?.url);
          const logoImg = checkURLProtocal(logo?.fields?.file?.url);
          const sideBarImg = checkURLProtocal(sideImg?.fields?.file?.url);
          const brandImage = brandImg.map((ele) => {
            return checkURLProtocal(ele.fields?.file?.url);
          });
          return { id, image, para1, para2, brandImage, logoImg, arrowColor, idTitle, sideBarImg };
        });
        setOurCompanies(ourCompanies);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
    return { loading, ourCompanies };
  };
  


/* news */

const ourNewsPage = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken: "5n4MqsNOGeRImytDmECuZi3XdclV8HqvLHf0CEkQLXo",
  });
  
  export const useFetchOurNews = () => {
    const [loading, setLoading] = useState(true);
    const [ourNews, setOurNews] = useState([]);
    const getData = async () => {
      try {
        const response = await ourNewsPage.getEntries({ content_type: "news" });
        const news = response.items.map((item) => {
          const { img, para1, para2, title, subImages, subtitle, date, url
          } = item.fields;
          const id = item.sys.id;
          /* const date = item.sys.createdAt; */
          const image = checkURLProtocal(img?.fields?.file?.url);
          const subImg = subImages.map((ele) => {
            return checkURLProtocal(ele.fields?.file?.url);
          });
          return { id, image, para1, para2, title, subImg, subtitle, date, url
          };
        });
        setOurNews(news);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
    return { loading, ourNews };
  };












/* ceo Message */


const ceoMessagee = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken:"7AaugJGSXfnECFN5KMkLY-yfgmn0BJSZRUeWT5iCvfs"
})

export const useFetchCeoMessage = () => {
    const [loading, setLoading] = useState(true)
    const [ceomessage, setCeoMessage] = useState([])
    const getData = async() => {
        try {
            const response = await ceoMessagee.getEntries({ content_type: "ceoMessage"});
            const ceoMessage = response.items.map((item) => {
                const {mainTitle, title, img,para1, para2, para3, name, job} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(img?.fields?.file?.url)
                return {mainTitle, title, id,image,para1, para2, para3, name, job}
            })
            setCeoMessage(ceoMessage)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, ceomessage}
}




/* our team */


const ourTeams = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken:"6qEd_3Kit5w8ad_-Z_6qtFy60EiXph53o-HAZLS1bb0"
})

export const useFetchOurTeams = () => {
    const [load, setLoading] = useState(true)
    const [ourteam, setOurTeam] = useState([])
    const getData = async() => {
        try {
            const response = await ourTeams.getEntries({ content_type: "ourTeam"});
            const ourTeam = response.items.map((item) => {
                const {name, job, img, url} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(img?.fields?.file?.url)
                return {name, job, id,image, url}
            })
            setOurTeam(ourTeam)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {load, ourteam}
}



/* single solutions */


const singleSolution = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken:"tt9zck8osJWDyg3JzULiecz6hSNrIDyLYQy8z9tPe0M"
})

export const useFetchSingleSolution = () => {
    const [loading, setLoading] = useState(true)
    const [singlesolution, setSingleSolution] = useState([])
    const getData = async() => {
        try {
            const response = await singleSolution.getEntries({ content_type: "singleSolutions"});
            const singleSolutions = response.items.map((item) => {
                const {title, desc, right, img} = item.fields
                const id = item.sys.id
                const image = checkURLProtocal(img?.fields?.file?.url)
                return {id, title, desc, right,image}
            })
            setSingleSolution(singleSolutions)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, singlesolution}
}



/* contact */


const contactUs = createClient({
    space: "wjc8e5m7rth8",
    environment: "master",
    accessToken:"NDh6I0EGd5_AORLOwwKbUWhz5xaWjBp3JmZFDuUL4vY"
})

export const useFetchContactUs = () => {
    const [loading, setLoading] = useState(true)
    const [contactLinks, setContactLinks] = useState([])
    const getData = async() => {
        try {
            const response = await contactUs.getEntries({ content_type: "contact"});
            const contact = response.items.map((item) => {
                const {email, phone, location} = item.fields
                const id = item.sys.id
                return {id, email, phone, location}
            })
            setContactLinks(contact)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
        getData()
    }, [])
    return {loading, contactLinks}
}