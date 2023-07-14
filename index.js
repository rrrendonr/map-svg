document.querySelectorAll(".path").forEach(path => {
    path.addEventListener("mouseover", function() {
        window.onmousemove = function(j) {
            x=j.clientX
            y=j.clientY
            document.getElementById("info").style.top=y-20+'px'
            document.getElementById("info").style.left=x+10+'px'
        }
        document.getElementById("info__content").innerText=path.id
        document.getElementById("info").style.opacity=1
    })

    path.addEventListener("mouseleave", function(){
        document.getElementById("info").style.opacity=0
    })
})

var buttons = document.getElementsByClassName("button-modal");
var modals = document.getElementsByClassName("modal");
var closeButtons = document.getElementsByClassName("close");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.opacity = 1;
        modal.style.visibility = "visible";
    };
}

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var modal = this.parentElement.parentElement;
        modal.style.opacity = 0;
        modal.style.visibility = "hidden";
    }
}

window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none"
        }
    }
}
//=========================atrio=========================================
pannellum.viewer('panorama1', {   
    "default": {
        "firstScene": "atrio",
        "author": "Web Dev",
        "sceneFadeDuration": 1000,
        "autoLoad": true        
    },

    "scenes": {
        "atrio": {
            "title": "Atrio Parque Principal",
            "hfov": 150,
            "pitch": 5,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "./atrio.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe"
                },
                {
                    "pitch": 30,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba"
                },
                {
                    "pitch": -1,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde Central",
                    "sceneId": "central"
                },
                {
                    "pitch": 10,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart"
                }
            ]
        },

        "caribe": {
            "title": "Vista desde Caribe",
            "hfov": 150,
            "yaw": 30,
            "pitch": 10,
            "type": "equirectangular",
            "panorama": "./caribe.jpg",
            "hotSpots": [
                {
                    "pitch": 25,
                    "yaw": 315,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 25,
                    "yaw": 330,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 30,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 25,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
            ]
        },

        "ceiba": {
            "title": "Vista desde la Ceiba",
            "hfov": 150,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "./ceiba.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 350,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": -0.6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": -5,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
                {
                    "pitch": -8,
                    "yaw": 305,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                }
            ]
        },

        "central": {
            "title": "Vista desde central",
            "hfov": 150,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./central.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 15,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                }
            ]
        },

        "smart": {
            "title": "Vista desde smart",
            "hfov": 150,
            "yaw": 200,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "./smart.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 15,
                    "yaw": 210,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 20,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                }
            ]
        }
    }
});

//================================ceiba=======================================

pannellum.viewer('panorama2', {   
    "default": {
        "firstScene": "ceiba",
        "author": "Web Dev",
        "sceneFadeDuration": 1000,
        "autoLoad": true        
    },

    "scenes": {
        "atrio": {
            "title": "Atrio Parque Principal",
            "hfov": 150,
            "pitch": 5,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "./atrio.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe"
                },
                {
                    "pitch": 30,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba"
                },
                {
                    "pitch": -1,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde Central",
                    "sceneId": "central"
                },
                {
                    "pitch": 10,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart"
                }
            ]
        },

        "caribe": {
            "title": "Vista desde Caribe",
            "hfov": 150,
            "yaw": 30,
            "pitch": 10,
            "type": "equirectangular",
            "panorama": "./caribe.jpg",
            "hotSpots": [
                {
                    "pitch": 25,
                    "yaw": 315,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 25,
                    "yaw": 330,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 30,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 25,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
            ]
        },

        "ceiba": {
            "title": "Vista desde la Ceiba",
            "hfov": 150,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "./ceiba.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 350,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": -0.6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": -5,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
                {
                    "pitch": -8,
                    "yaw": 305,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                }
            ]
        },

        "central": {
            "title": "Vista desde central",
            "hfov": 150,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./central.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 15,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                }
            ]
        },

        "smart": {
            "title": "Vista desde smart",
            "hfov": 150,
            "yaw": 200,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "./smart.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 15,
                    "yaw": 210,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 20,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                }
            ]
        }
    }
});
//===============================caribe=======================================

pannellum.viewer('panorama3', {   
    "default": {
        "firstScene": "caribe",
        "author": "Web Dev",
        "sceneFadeDuration": 1000,
        "autoLoad": true        
    },

    "scenes": {
        "atrio": {
            "title": "Atrio Parque Principal",
            "hfov": 150,
            "pitch": 5,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "./atrio.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe"
                },
                {
                    "pitch": 30,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba"
                },
                {
                    "pitch": -1,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde Central",
                    "sceneId": "central"
                },
                {
                    "pitch": 10,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart"
                }
            ]
        },

        "caribe": {
            "title": "Vista desde Caribe",
            "hfov": 150,
            "yaw": 30,
            "pitch": 10,
            "type": "equirectangular",
            "panorama": "./caribe.jpg",
            "hotSpots": [
                {
                    "pitch": 25,
                    "yaw": 315,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 25,
                    "yaw": 330,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 30,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 25,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
            ]
        },

        "ceiba": {
            "title": "Vista desde la Ceiba",
            "hfov": 150,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "./ceiba.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 350,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": -0.6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": -5,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
                {
                    "pitch": -8,
                    "yaw": 305,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                }
            ]
        },

        "central": {
            "title": "Vista desde central",
            "hfov": 150,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./central.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 15,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                }
            ]
        },

        "smart": {
            "title": "Vista desde smart",
            "hfov": 150,
            "yaw": 200,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "./smart.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 15,
                    "yaw": 210,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 20,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                }
            ]
        }
    }
});
//=============================central=======================================

pannellum.viewer('panorama4', {   
    "default": {
        "firstScene": "central",
        "author": "Web Dev",
        "sceneFadeDuration": 1000,
        "autoLoad": true        
    },

    "scenes": {
        "atrio": {
            "title": "Atrio Parque Principal",
            "hfov": 150,
            "pitch": 5,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "./atrio.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe"
                },
                {
                    "pitch": 30,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba"
                },
                {
                    "pitch": -1,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde Central",
                    "sceneId": "central"
                },
                {
                    "pitch": 10,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart"
                }
            ]
        },

        "caribe": {
            "title": "Vista desde Caribe",
            "hfov": 150,
            "yaw": 30,
            "pitch": 10,
            "type": "equirectangular",
            "panorama": "./caribe.jpg",
            "hotSpots": [
                {
                    "pitch": 25,
                    "yaw": 315,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 25,
                    "yaw": 330,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 30,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 25,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
            ]
        },

        "ceiba": {
            "title": "Vista desde la Ceiba",
            "hfov": 150,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "./ceiba.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 350,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": -0.6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": -5,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
                {
                    "pitch": -8,
                    "yaw": 305,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                }
            ]
        },

        "central": {
            "title": "Vista desde central",
            "hfov": 150,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./central.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 15,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                }
            ]
        },

        "smart": {
            "title": "Vista desde smart",
            "hfov": 150,
            "yaw": 200,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "./smart.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 15,
                    "yaw": 210,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 20,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                }
            ]
        }
    }
});
//=============================smart=========================================

pannellum.viewer('panorama5', {   
    "default": {
        "firstScene": "smart",
        "author": "Web Dev",
        "sceneFadeDuration": 1000,
        "autoLoad": true        
    },

    "scenes": {
        "atrio": {
            "title": "Atrio Parque Principal",
            "hfov": 150,
            "pitch": 5,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "./atrio.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe"
                },
                {
                    "pitch": 30,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba"
                },
                {
                    "pitch": -1,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde Central",
                    "sceneId": "central"
                },
                {
                    "pitch": 10,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart"
                }
            ]
        },

        "caribe": {
            "title": "Vista desde Caribe",
            "hfov": 150,
            "yaw": 30,
            "pitch": 10,
            "type": "equirectangular",
            "panorama": "./caribe.jpg",
            "hotSpots": [
                {
                    "pitch": 25,
                    "yaw": 315,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 25,
                    "yaw": 330,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 30,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 25,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
            ]
        },

        "ceiba": {
            "title": "Vista desde la Ceiba",
            "hfov": 150,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "./ceiba.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 350,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": -0.6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": -5,
                    "yaw": 240,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                },
                {
                    "pitch": -8,
                    "yaw": 305,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                }
            ]
        },

        "central": {
            "title": "Vista desde central",
            "hfov": 150,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./central.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 15,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Vista desde smart",
                    "sceneId": "smart",
                }
            ]
        },

        "smart": {
            "title": "Vista desde smart",
            "hfov": 150,
            "yaw": 200,
            "pitch": 5,
            "type": "equirectangular",
            "panorama": "./smart.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Vista desde central",
                    "sceneId": "central",
                },
                {
                    "pitch": 15,
                    "yaw": 210,
                    "type": "scene",
                    "text": "Vista desde el atrio",
                    "sceneId": "atrio",
                },
                {
                    "pitch": 20,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Vista desde caribe",
                    "sceneId": "caribe",
                },
                {
                    "pitch": 20,
                    "yaw": 250,
                    "type": "scene",
                    "text": "Vista desde la ceiba",
                    "sceneId": "ceiba",
                }
            ]
        }
    }
});