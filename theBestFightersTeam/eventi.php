<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ASD The Best Fighter Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="stili/style.css">
    <script src="script/jquery.js"></script>
    <script src="script/script.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="icon" href="media/logoTeam.png">
</head>

<body>
    <?php   
            include "assets/nav.html";
            include "assets/coverPage.html";
            ?>

    <section class="column sectionEventi">

    <?php
            /*function ElaboraFeed($url){
            $getfile = file_get_contents($url);
            $xml = new SimpleXMLElement($getfile);

            $feed_info = array();
            $feed_art = array();

            $feed_info['titolo_feed'] = $xml->channel->title;
            $feed_info['link_feed'] = $xml->channel->link;
            $feed_info['descrizione_feed'] = $xml->channel->description;
            $feed_info['lingua_feed'] = $xml->channel->language;
            $feed_info['last_upd_feed'] = $xml->channel->lastBuildDate;

            $i = 0; #inizializzo a 0 una variabile indice
            foreach($xml->channel->item as $item)
            {
            $feed_art[$i]['titolo_articolo'] = $item->title;
            $feed_art[$i]['descr_articolo'] = $item->description;
            $feed_art[$i]['data_articolo'] = $item->pubDate;
            $feed_art[$i]['link_articolo'] = $item->link;
            $i++;
            }

            $total = array_merge($feed_info,$feed_art);
            //print_r($total);

            foreach ($feed_info as $key => $value) {
                echo "<p>".$key." - ".$value."</p>";
                echo "<hr />";
            }

            echo "<br />";echo "<br />";
            foreach ($feed_art as $key => $value) {
                echo "<p>Titolo: ".$value['titolo_articolo']."</p>";
                echo "<p>Descrizione: ".$value['descr_articolo']."</p>";
                echo "<p>Data: ".$value['data_articolo']."</p>";
                echo "<p>Link:".$value['link_articolo']."</p>";
                echo "<hr />";
            }

            }//Elabora Feed

            //Elabora
            ElaboraFeed('http://feeds.bbci.co.uk/news/england/rss.xml');*/
            $rss = simplexml_load_file('http://www.fikbms.net/home/news.html?format=feed&type=rss');

            echo '<h1>'. $rss->channel->title . '</h1>';

            foreach ($rss->channel->item as $item) {
               echo '<h2><a href="'. $item->link .'">' . $item->title . "</a></h2>";
               echo "<p>" . $item->pubDate . "</p>";
               echo "<p style='widht:80%,margin:1em'>" . $item->description . "</p>";
            } 




            ?>
            </section>

    <?php
        include "assets/footer.html";
        ?>
 
</body>

</html>