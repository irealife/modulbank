scriptLoader.load('/libs/jquery-3.5.1.min.js')
    .then(() => scriptLoader.load('/libs/imask/imask.min.js'))
    .then(() => {

        function initForms(element) {
            if (window.IMask) {
                const phones = document.querySelectorAll('[type="tel"]');
                phones.forEach(phone => {
                    IMask(phone, {
                        mask: '+{7} (000)-000-00-00'
                    })
                })
            }
        }

        initForms(document);

    })
