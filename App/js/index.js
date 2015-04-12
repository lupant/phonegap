// The default code is a com class (inherited from linb.Com)
Class('App', 'xui.Com',{
    // Ensure that all the value of "key/value pair" does not refer to external variables
    Instance:{
        // To initialize instance(e.g. properties)
        initialize : function(){
            // To determine whether or not the com will be destroyed, when the first UI control be destroyed
            this.autoDestroy = true;
            // To initialize properties
            this.properties = {};
        },
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Tools
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append((new xui.UI.Div())
            .setHost(host,"ctl_div7")
            .setDomId("map")
            .setDock("width")
            .setDockMargin({"left":30, "top":0, "right":30, "bottom":0})
            .setTop(130)
            .setHeight(348)
            .setCustomStyle({"KEY":{"border":"solid #FF8C00 1px", "box-shadow":"6px 6px 10px #F4A460", "$gradients":""}})
            );
            
            append((new xui.UI.Pane())
            .setHost(host,"ctl_pane6")
            .setDock("center")
            .setLeft(170)
            .setTop(70)
            .setWidth(450)
            .setHeight(50)
            .setZIndex(0)
            );
            
            host.ctl_pane6.append((new xui.UI.Input())
            .setHost(host,"address")
            .setDomId("address")
            .setDirtyMark(false)
            .setLeft(40)
            .setTop(20)
            .setWidth(200)
            .setValue("via ugo la malfa, pomezia")
            );
            
            host.ctl_pane6.append((new xui.UI.SButton())
            .setHost(host,"ctl_sbutton1")
            .setLeft(270)
            .setTop(20)
            .setWidth(140)
            .setCaption("Show on Map")
            .onClick("_ctl_sbutton1_onclick")
            .setCustomStyle({"KEY":{"$gradients":"", "transform":"eg)"}})
            );
            
            append((new xui.UI.Label())
            .setHost(host,"ctl_label1")
            .setDock("center")
            .setLeft(380)
            .setTop(20)
            .setWidth(160)
            .setHeight(40)
            .setCaption("Geo Locator")
            .setHAlign("center")
            .setVAlign("middle")
            .setCustomStyle({"KEY":{"font-size":"14pt", "color":"#B22222", "text-decoration":"blink", "box-shadow":"0px 0px 17px", "$gradients":""}, "CAPTION":{"font-size":"12pt", "font-weight":"bold", "font-style":"italic", "$gradients":""}})
            );
            
            return children;
            // ]]Code created by CrossUI RAD Tools
        },
        // Give a chance to load other com
        iniExComs : function(com, threadid){
        },
        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        // This instance's events
        events : {},
        _ctl_sbutton1_onclick : function (profile, e, src, value) {
            ns = this;
            
            
            GMaps.geocode({
                address: ns.address.getUIValue(),
                callback: function(results, status){
                    
                    if(status=='OK'){
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
            
        },
        _ctl_sbutton3_onclick:function (profile,e,src,value){
           location.reload();
        }
    }
});