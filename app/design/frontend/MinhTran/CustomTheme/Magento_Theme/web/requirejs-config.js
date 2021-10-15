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
            'Magento_Theme/js/bootstrap.bundle.min.js',
            'Magento_Theme/js/jquery.slim.min.js',
            'Magento_Theme/js/popper.min.js'
        ]

    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
};
var config = {
    paths: {
        'backtotop': 'Magento_Theme/js/backtotop.js'
    },
    shim: {
        'backtotop': {
            deps: ['jquery']
        }
    }
};