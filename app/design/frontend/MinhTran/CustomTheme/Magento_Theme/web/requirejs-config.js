/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
 
var config = {
    deps: [
        'Magento_Theme/js/theme'
    ]
};
var config = {
    paths: {
        'bootstrap': [
            'Magento_Theme/js/bootstrap.bundle',
            'Magento_Theme/js/jquery-3.2.1.slim.min.js',
            'Magento_Theme/js/popper.min.js',

        ]

    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
};
