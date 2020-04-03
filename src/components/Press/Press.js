import React from "react";
import "./Press.css";
import PressListItem from "./PressListItem";

class Press extends React.Component {
    render() {
        const articlelist = [
            {
                publication: "Red Magazine",
                title: "Lopè Ariyo: the food world's new star",
                url:
                    "https://www.redonline.co.uk/food/best-recipes/a523626/lope-ariyo-the-food-worlds-new-star/",
                date: "02/09/2016"
            },
            {
                publication: "The Guardian",
                title: "Rising stars of 2017: chef Lopè Ariyo",
                url:
                    "https://www.theguardian.com/lifeandstyle/2017/jan/01/rising-stars-2017-chef-lope-ariyo-nigerian-food-jollof-rice",
                date: "01/01/2017"
            },
            {
                publication: "FT Magazine",
                title: "The best... summer food books ",
                url:
                    "https://www.ft.com/content/5796b3f0-400d-11e7-82b6-896b95f30f58",
                date: "26/05/2017"
            },
            {
                publication: "Vice",
                title:
                    "Meet the Hibiscus-Obsessed Chef Celebrating British Nigerian Food",
                url:
                    "https://www.vice.com/en_uk/article/zmbjb9/meet-the-hibiscus-obsessed-chef-celebrating-british-nigerian-food",
                date: "30/05/2017"
            },
            {
                publication: "Aduna Blog",
                title: "Lopè Ariyo's Debut Cookbook Hibiscus",
                url:
                    "https://aduna.com/blogs/aduna-world/lope-ariyos-debut-cookbook-hibiscus-fresh-flavours-from-africa",
                date: "01/09/2017"
            },
            {
                publication: "iNews",
                title: "West African dishes are finally on the food map",
                url:
                    "https://inews.co.uk/inews-lifestyle/food-and-drink/why-west-african-dishes-are-the-next-big-trend-in-food-634472",
                date: "01/09/2018"
            },
            {
                publication: "originally publish on The Pool",
                title:
                    "West African food is at the helm of a restaurant revolution. And women are leading it",
                url:
                    "https://medium.com/@yomiadegoke/west-african-food-is-at-the-helm-of-a-restaurant-revolution-and-women-are-leading-it-cbf731e4e30e",
                date: "31/03/2018"
            }
        ];

        return (
            <div className="press-container">
                <div className="press-card">
                    <h1>Press</h1>
                    <div className="press">
                        <h2>Online Articles</h2>
                        <ul>
                            {articlelist.map(article => (
                                <PressListItem
                                    publication={article.publication}
                                    url={article.url}
                                    title={article.title}
                                    date={article.date}
                                    key={article.title}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Press;
