function getGaleria() {
  return fetch(
    "https://cdn.contentful.com/spaces/rhy3jleltni7/environments/master/entries?access_token=TfacPggm74tl4R5llYcG6dbs-HFB-lbyKEWZWjR0LwQ&content_type=cumple"
  )
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      console.log(resp);
      const galeria = resp.items.map((item) => {
        const idImagen = item.fields.foto.sys.id;
        const imagen = buscarImagen(idImagen, resp);
        linkImg = imagen.fields.file.url;
        return {
          url: linkImg,
          link: item.fields.link,
        };
      });

      return galeria;
    });
}
getGaleria();

function buscarImagen(id, datos) {
  const imagen = datos.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return imagen;
}

function addGaleria(params = {}) {
  const template = document.querySelector("#galeria-temple");

  const container = document.querySelector(".galeria__card-container");

  const imgCard = template.content.querySelector(".galeria__card-img");
  imgCard.src = "http:" + params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
