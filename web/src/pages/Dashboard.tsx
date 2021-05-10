import Header from "../components/Header";
import Card from "../components/Card";

import Styled from "../styles/pages/Dashboard";

export default function Dashboard() {
  return (
    <>
      <Header />

      <Styled.Grid>
        <Card
          url="/detail:react"
          img="http://books.google.com/books/content?id=tDjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="React"
        />

        <Card
          url="/detail:node.js"
          img="http://books.google.com/books/content?id=byCjCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="Node.js"
        />

        <Card
          url="/detail:next.js"
          img="http://books.google.com/books/content?id=xAGCzSGTMNIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="Next.js"
        />

        <Card
          url="/detail:angular.js"
          img="http://books.google.com/books/content?id=deX8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="Angular.js"
        />

        <Card
          url="/detail:vue.js"
          img="http://books.google.com/books/content?id=Ft-8DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="Vue.js"
        />

        <Card
          url="/detail:react native.js"
          img="http://books.google.com/books/content?id=keDdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="React Native"
        />

        <Card
          url="/detail:typescript"
          img="http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="Typescript"
        />

        <Card
          url="/detail:javascript"
          img="http://books.google.com/books/content?id=6n_xDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="JavaScript"
        />

        <Card
          url="/detail:orm"
          img="http://books.google.com/books/content?id=Edc0AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="ORM"
        />

        <Card
          url="/detail:mongodb"
          img="http://books.google.com/books/content?id=pIrCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          volume="MongoDB"
        />
      </Styled.Grid>
    </>
  );
}
