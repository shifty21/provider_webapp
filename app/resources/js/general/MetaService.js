(function (Service, undefined)
{ function MetaService() {
       var title = '';
       var metaDescription = '';
       var metaKeywords = '';
       var image = '';
       return {
          set: function(newTitle, newMetaDescription, newKeywords,newimage) {
              metaKeywords = newKeywords;
              metaDescription = newMetaDescription;
              title = newTitle;
              image = newimage;
          },
          
          metaTitle: function(){ return title; },
          metaImage: function(){ return image; },
          metaDescription: function() { return metaDescription; },
          metaKeywords: function() { return metaKeywords; }
       }
}
  SG.Modules.SG.service("MetaService",MetaService);
}(SG.Service = SG.Service || {} ));