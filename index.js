/* SOURCE FILE - Copyright (c) 2017 mimehttp - Tanase Laurentiu Iulian - https://github.com/RealTimeCom/mimehttp */
'use strict';

const path = require('path');

const type = {
    // text, UTF-8 is added for safety
    'txt': 'text/plain; charset=UTF-8',
    'html': 'text/html; charset=UTF-8',
    'htm': 'text/html; charset=UTF-8',
    'css': 'text/css; charset=UTF-8',
    'js': 'text/javascript; charset=UTF-8',
    'csv': 'text/csv; charset=UTF-8',
    'rtx': 'text/richtext; charset=UTF-8',
    // application
    'xml': 'application/xml',
    'xhtml': 'application/xhtml+xml',
    'rtf': 'application/rtf',
    'json': 'application/json',
    'jsonp': 'application/json-p',
    'ttf': 'application/x-font-ttf',
    'otf': 'application/x-font-opentype',
    'woff': 'application/font-woff',
    'doc': 'application/msword',
    'm3u8': 'application/vnd.apple.mpegurl',
    '7z': 'application/x-7z-compressed',
    'air': 'application/vnd.adobe.air-application-installer-package+zip',
    'swf': 'application/x-shockwave-flash',
    'pdf': 'application/pdf',
    'dir': 'application/x-director',
    'apk': 'application/vnd.android.package-archive',
    'mpkg': 'application/vnd.apple.installer+xml',
    'atom': 'application/atom+xml',
    'torrent': 'application/x-bittorrent',
    'sh': 'application/x-sh',
    'bz': 'application/x-bzip',
    'bz2': 'application/x-bzip2',
    'deb': 'application/x-debian-package',
    'exe': 'application/x-msdownload',
    'xls': 'application/vnd.ms-excel',
    'mxml': 'application/xv+xml',
    'ogx': 'application/ogg',
    'rar': 'application/x-rar-compressed',
    'rss': 'application/rss+xml',
    'tar': 'application/x-tar',
    'tcl': 'application/x-tcl',
    'xslt': 'application/xslt+xml',
    'zip': 'application/zip',
    // image
    'ico': 'image/x-icon',
    'gif': 'image/gif',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'bmp': 'image/bmp',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'tiff': 'image/tiff',
    'webp': 'image/webp',
    'xif': 'image/vnd.xiff',
    // audio
    'aac': 'audio/x-aac',
    'dts': 'audio/vnd.dts',
    'dtshd': 'audio/vnd.dts.hd',
    'm3u': 'audio/x-mpegurl',
    'wma': 'audio/x-ms-wma',
    'mid': 'audio/midi',
    'mpga': 'audio/mpeg',
    'mp4a': 'audio/mp4',
    'oga': 'audio/ogg',
    'weba': 'audio/webm',
    'ram': 'audio/x-pn-realaudio',
    'wav': 'audio/x-wav',
    // video
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'mpeg': 'video/mpeg',
    'avi': 'video/x-msvideo',
    '3gp': 'video/3gpp',
    '3g2': 'video/3gpp2',
    'f4v': 'video/x-f4v',
    'flv': 'video/x-flv',
    'm4v': 'video/x-m4v',
    'h263': 'video/h263',
    'h264': 'video/h264',
    'asf': 'video/x-ms-asf',
    'wm': 'video/x-ms-wm',
    'wmx': 'video/x-ms-wmx',
    'wmv': 'video/x-ms-wmv',
    'wvx': 'video/x-ms-wvx',
    'ogv': 'video/ogg',
    'qt': 'video/quicktime',
    'jpgv': 'video/jpeg'
};

function file(f) {
    if (typeof f === 'string') {
        f = f.trim();
        if (f !== '') {
            f = path.normalize(f);
            let x = path.parse(f).ext;
            if (x !== '') {
                x = x.substr(1).toLowerCase();
                if (x in type) { return type[x]; }
            }
        }
    }
    return 'application/octet-stream'; // unknown
}

module.exports = { type: type, file: file };
