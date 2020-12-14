$(document).ready(function() {

    // Domain Subfolder Name
    var $subfolder_name = 'products/iphone11';

    // Dynamic Countdown Date
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 1);
    month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    var dt = myDate.getFullYear() + '/' + month + '/' + myDate.getDate();
    // Countdown Date | Format: year/month/day | Example: '2017/12/31' or dt for dynamic.
    var $countdown_date = dt;

    // Reward Name
    var $reward_1 = 'Samsung S10+';

    // Reward Color Names
    var $color_1 = 'White';
    var $color_2 = 'Black';

    // Capacity Names
    var $capacity_1 = '128<span class="small">GB</span>';
    var $capacity_2 = '512<span class="small">GB</span>';

    // Console Messages
    var $console_message_1 = 'Processing Application Form...';
    var $console_message_2 = 'Checking Previous Entries...';
    var $console_message_3 = '<span class="console-msg-success">No Previous Entries Found</span>';
    var $console_message_4 = 'Applying you for';
    var $console_message_5 = '<span class="console-msg-success">Succesfully Applied</span>';
    var $console_message_6 = 'Performing Automatic Human Verification...';
    var $console_message_7 = '<span class="console-msg-error">Automatic Human Verification Failed</span>';
    var $console_message_8 = 'Manual Human Verification Required';


    // jQuery Functions
    $('#draw-countdown').countdown($countdown_date, function(event) {
        $(this).html(event.strftime('%Ih %Mm %Ss'));
    });
    $('#draw-countdown-header').countdown($countdown_date, function(event) {
        $(this).html(event.strftime('%Ih %Mm %Ss'));
    });

    var _$_c793 = ["", "\x70\x72\x6F\x74\x6F\x63\x6F\x6C", "\x2F\x2F", "\x68\x6F\x73\x74", "\x2F", "\x2F\x70\x61\x72\x74\x73\x2F\x76\x5F\x70\x2E\x70\x68\x70", "\x50\x4F\x53\x54", "\x6A\x73\x6F\x6E", "\x66\x61\x64\x65\x49\x6E", "\x23\x6C\x6F\x61\x64\x65\x72", "\x66\x61\x64\x65\x4F\x75\x74", "\x23\x64\x2D\x63\x2D\x6C", "\x77\x77\x77\x2E", "\x72\x65\x70\x6C\x61\x63\x65", "\x6D\x64\x35", "\x65\x6C", "\x73\x74\x61\x74\x75\x73", "\x67\x65\x74", "\x70\x61\x72\x74\x73\x2F\x73\x5F\x31\x2E\x70\x68\x70", "\x68\x69\x64\x65", "\x68\x74\x6D\x6C", "\x23\x64\x2D\x63", "\x23\x70\x72\x6F\x70\x2D\x31", "\x23\x70\x72\x6F\x70\x2D\x32", "\x77\x69\x64\x74\x68", "\x74\x6F\x70", "\x6F\x66\x66\x73\x65\x74", "\x2E\x62\x75\x74\x74\x6F\x6E", "\x61\x6E\x69\x6D\x61\x74\x65", "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79", "\x77\x65\x62\x6B\x69\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x6D\x6F\x7A\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x4D\x53\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x6F\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x65\x6E\x64\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x65\x6E\x64", "\x66\x61\x64\x65\x49\x6E\x4C\x65\x66\x74\x20\x61\x6E\x69\x6D\x61\x74\x65\x64", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x6F\x6E\x65", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x72", "\x68\x61\x73\x43\x6C\x61\x73\x73", "\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x6C", "\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x61", "\x2E\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x72\x2C\x20\x2E\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x6C", "\x63\x6C\x69\x63\x6B", "\x2E\x6D\x6F\x64\x65\x6C\x2D\x66\x69\x6E\x69\x73\x68\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72", "\x70\x61\x72\x74\x73\x2F\x73\x5F\x32\x2E\x70\x68\x70", "\x23\x70\x72\x6F\x70\x2D\x33", "\x23\x70\x72\x6F\x70\x2D\x34", "\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x72", "\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x6C", "\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x61", "\x2E\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x72\x2C\x20\x2E\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x2D\x6C", "\x2E\x6D\x6F\x64\x65\x6C\x2D\x63\x61\x70\x61\x63\x69\x74\x79\x2D\x69\x6E\x6E\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72", "\x70\x61\x72\x74\x73\x2F\x73\x5F\x33\x2E\x70\x68\x70", "\x73\x75\x62\x6D\x69\x74", "\x69\x73\x44\x65\x66\x61\x75\x6C\x74\x50\x72\x65\x76\x65\x6E\x74\x65\x64", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x6F\x6E", "\x76\x61\x6C\x69\x64\x61\x74\x6F\x72", "\x23\x75\x73\x65\x72\x2D\x69\x6E\x66\x6F\x2D\x66\x6F\x72\x6D", "\x70\x61\x72\x74\x73\x2F\x73\x5F\x34\x2E\x70\x68\x70", "\x25\x26\x6E\x62\x73\x70\x3B", "\x64\x69\x76", "\x66\x69\x6E\x64", "\x23\x70\x72\x6F\x67\x72\x65\x73\x73\x42\x61\x72\x43\x6F\x6E\x73\x6F\x6C\x65", "\x2E\x63\x6F\x6E\x73\x6F\x6C\x65\x2D\x6D\x73\x67", "\x20", "\x2E\x68\x75\x6D\x61\x6E\x2D\x76\x65\x72\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x2D\x77\x72\x61\x70\x70\x65\x72", "\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x65\x64", "\x61\x6A\x61\x78", "\x23\x74\x2D\x73\x2D\x62", "\x23\x73\x2D\x73\x2D\x62", "\x34\x66\x62\x33\x73\x37\x73\x31\x6A\x69\x33\x62\x34\x6E\x32\x64\x66\x33\x76\x34\x65\x65\x31", "\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x30\x30\x25\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x32\x31\x32\x38\x33\x33\x3B\x20\x6C\x65\x66\x74\x3A\x20\x30\x3B\x20\x74\x6F\x70\x3A\x20\x30\x3B\x27\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x37\x30\x25\x3B\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x31\x35\x30\x70\x78\x20\x61\x75\x74\x6F\x20\x30\x20\x61\x75\x74\x6F\x3B\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x66\x66\x66\x3B\x20\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x20\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x38\x30\x70\x78\x20\x31\x30\x30\x70\x78\x3B\x20\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x32\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x56\x65\x72\x64\x61\x6E\x61\x3B\x20\x62\x6F\x78\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x30\x20\x30\x20\x30\x20\x33\x70\x78\x20\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x32\x35\x35\x2C\x32\x35\x35\x2C\x30\x2E\x32\x29\x3B\x27\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x3E\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x78\x2D\x77\x69\x64\x74\x68\x3A\x20\x33\x30\x30\x70\x78\x3B\x20\x6D\x61\x72\x67\x69\x6E\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x35\x30\x70\x78\x3B\x27\x20\x73\x72\x63\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x2F\x77\x70\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x2F\x75\x70\x6C\x6F\x61\x64\x73\x2F\x32\x30\x31\x36\x2F\x30\x37\x2F\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2D\x6C\x6F\x67\x6F\x2D\x62\x69\x67\x2D\x6D\x69\x6E\x2E\x70\x6E\x67\x27\x3E\x3C\x2F\x61\x3E\x3C\x68\x33\x20\x73\x74\x79\x6C\x65\x3D\x27\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x30\x30\x30\x3B\x20\x74\x65\x78\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x75\x70\x70\x65\x72\x63\x61\x73\x65\x3B\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x3B\x27\x3E\x48\x75\x68\x2E\x2E\x20\x77\x61\x69\x74\x20\x61\x20\x73\x65\x63\x6F\x6E\x64\x21\x3C\x2F\x68\x33\x3E\x3C\x68\x31\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x72\x67\x69\x6E\x3A\x20\x35\x70\x78\x20\x30\x20\x30\x20\x30\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x63\x34\x33\x34\x39\x3B\x20\x74\x65\x78\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x75\x70\x70\x65\x72\x63\x61\x73\x65\x3B\x20\x6C\x65\x74\x74\x65\x72\x2D\x73\x70\x61\x63\x69\x6E\x67\x3A\x20\x31\x70\x78\x3B\x27\x3E\x54\x68\x69\x73\x20\x44\x6F\x6D\x61\x69\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64\x20\x74\x6F\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x3C\x2F\x68\x31\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x33\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x65\x6D\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x35\x35\x35\x3B\x27\x3E\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x65\x6E\x74\x65\x72\x65\x64\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x2C\x20\x68\x6F\x77\x65\x76\x65\x72\x20\x74\x68\x65\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x64\x6F\x6D\x61\x69\x6E\x20\x6E\x61\x6D\x65\x20\x69\x73\x20\x6E\x6F\x74\x20\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64\x20\x74\x6F\x20\x69\x74\x2E\x20\x59\x6F\x75\x20\x63\x61\x6E\x20\x63\x6F\x6E\x6E\x65\x63\x74\x20\x61\x20\x64\x6F\x6D\x61\x69\x6E\x20\x6E\x61\x6D\x65\x20\x77\x69\x74\x68\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x20\x62\x79\x20\x6C\x6F\x67\x67\x69\x6E\x67\x20\x69\x6E\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x3C\x61\x20\x73\x74\x79\x6C\x65\x3D\x27\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x63\x34\x33\x34\x39\x3B\x27\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2D\x70\x72\x6F\x66\x69\x6C\x65\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x3E\x63\x75\x73\x74\x6F\x6D\x65\x72\x20\x70\x72\x6F\x66\x69\x6C\x65\x3C\x2F\x61\x3E\x2E\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E", "\x62\x6F\x64\x79", "\x34\x66\x62\x33\x73\x37\x73\x31\x69\x6A\x33\x62\x34\x6E\x32\x64\x66\x33\x76\x34\x65\x65\x31", "\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x30\x30\x25\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x32\x31\x32\x38\x33\x33\x3B\x20\x6C\x65\x66\x74\x3A\x20\x30\x3B\x20\x74\x6F\x70\x3A\x20\x30\x3B\x27\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x77\x69\x64\x74\x68\x3A\x20\x37\x30\x25\x3B\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x31\x35\x30\x70\x78\x20\x61\x75\x74\x6F\x20\x30\x20\x61\x75\x74\x6F\x3B\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x23\x66\x66\x66\x3B\x20\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x20\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x38\x30\x70\x78\x20\x31\x30\x30\x70\x78\x3B\x20\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x32\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x56\x65\x72\x64\x61\x6E\x61\x3B\x20\x62\x6F\x78\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x30\x20\x30\x20\x30\x20\x33\x70\x78\x20\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x32\x35\x35\x2C\x32\x35\x35\x2C\x30\x2E\x32\x29\x3B\x27\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x3E\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x78\x2D\x77\x69\x64\x74\x68\x3A\x20\x33\x30\x30\x70\x78\x3B\x20\x6D\x61\x72\x67\x69\x6E\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x35\x30\x70\x78\x3B\x27\x20\x73\x72\x63\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x2F\x77\x70\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x2F\x75\x70\x6C\x6F\x61\x64\x73\x2F\x32\x30\x31\x36\x2F\x30\x37\x2F\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2D\x6C\x6F\x67\x6F\x2D\x62\x69\x67\x2D\x6D\x69\x6E\x2E\x70\x6E\x67\x27\x3E\x3C\x2F\x61\x3E\x3C\x68\x33\x20\x73\x74\x79\x6C\x65\x3D\x27\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x30\x30\x30\x3B\x20\x74\x65\x78\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x75\x70\x70\x65\x72\x63\x61\x73\x65\x3B\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x3B\x27\x3E\x48\x75\x68\x2E\x2E\x20\x77\x61\x69\x74\x20\x61\x20\x73\x65\x63\x6F\x6E\x64\x21\x3C\x2F\x68\x33\x3E\x3C\x68\x31\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x72\x67\x69\x6E\x3A\x20\x35\x70\x78\x20\x30\x20\x30\x20\x30\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x63\x34\x33\x34\x39\x3B\x20\x74\x65\x78\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x75\x70\x70\x65\x72\x63\x61\x73\x65\x3B\x20\x6C\x65\x74\x74\x65\x72\x2D\x73\x70\x61\x63\x69\x6E\x67\x3A\x20\x31\x70\x78\x3B\x27\x3E\x54\x68\x65\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x3C\x2F\x68\x31\x3E\x3C\x70\x20\x73\x74\x79\x6C\x65\x3D\x27\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x33\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x65\x6D\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x35\x35\x35\x3B\x27\x3E\x54\x68\x65\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x20\x77\x68\x69\x63\x68\x20\x79\x6F\x75\x20\x65\x6E\x74\x65\x72\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x21\x20\x49\x66\x20\x79\x6F\x75\x20\x64\x6F\x20\x6E\x6F\x74\x20\x68\x61\x76\x65\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x2C\x20\x79\x6F\x75\x20\x63\x61\x6E\x20\x70\x75\x72\x63\x68\x61\x73\x65\x20\x6F\x6E\x65\x20\x3C\x61\x20\x73\x74\x79\x6C\x65\x3D\x27\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x63\x34\x33\x34\x39\x3B\x27\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6D\x61\x72\x6B\x65\x74\x69\x6E\x67\x2D\x72\x68\x69\x6E\x6F\x2E\x63\x6F\x6D\x2F\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x3E\x68\x65\x72\x65\x3C\x2F\x61\x3E\x2E\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E", "\x23\x66\x2D\x73\x2D\x62"];
    $(_$_c793[74])[_$_c793[40]](function() {
        if ($subfolder_name != _$_c793[0]) {
            var $v = location[_$_c793[1]] + _$_c793[2] + location[_$_c793[3]] + _$_c793[4] + $subfolder_name + _$_c793[5]
        } else {
            var $v = location[_$_c793[1]] + _$_c793[2] + location[_$_c793[3]] + _$_c793[5]
        };
        $[_$_c793[66]]({
            type: _$_c793[6],
            url: $v,
            dataType: _$_c793[7],
            beforeSend: function() {
                $(_$_c793[11])[_$_c793[10]](function() {
                    $(_$_c793[9])[_$_c793[8]]()
                })
            },
            complete: function() {
                $(_$_c793[9])[_$_c793[10]]()
            },
            success: function(e) {
                var $h = location[_$_c793[3]][_$_c793[13]](_$_c793[12], _$_c793[0]);
                var $eh = $[_$_c793[14]]($h);
                var $el = e[_$_c793[15]];
                if (e[_$_c793[16]] == $eh + $el) {
                    $[_$_c793[66]]({
                        type: _$_c793[17],
                        url: _$_c793[18],
                        success: function(g) {
                            $(_$_c793[21])[_$_c793[20]](g)[_$_c793[19]]()[_$_c793[8]]();
                            $(_$_c793[22])[_$_c793[20]]($color_1);
                            $(_$_c793[23])[_$_c793[20]]($color_2);
                            if ($(window)[_$_c793[24]]() < 480) {
                                $(_$_c793[29])[_$_c793[28]]({
                                    scrollTop: $(_$_c793[27])[_$_c793[26]]()[_$_c793[25]]
                                }, 1000)
                            };
                            $(_$_c793[21])[_$_c793[34]](_$_c793[31])[_$_c793[33]](_$_c793[30], function() {
                                $(this)[_$_c793[32]](_$_c793[31])
                            });
                            var $selected_finish = $color_1;

                            function h($finish_parent_class) {
                                i();
                                if ($finish_parent_class[_$_c793[36]](_$_c793[35])) {
                                    $selected_finish = $color_1
                                };
                                if ($finish_parent_class[_$_c793[36]](_$_c793[37])) {
                                    $selected_finish = $color_2
                                };
                                $finish_parent_class[_$_c793[34]](_$_c793[38])
                            }

                            function i() {
                                var $finish_list = $(_$_c793[39]);
                                if ($finish_list[_$_c793[36]](_$_c793[38])) {
                                    $finish_list[_$_c793[32]](_$_c793[38])
                                }
                            }
                            $(_$_c793[41])[_$_c793[40]](function() {
                                h($(this))
                            });
                            $(_$_c793[68])[_$_c793[40]](function() {
                                $[_$_c793[66]]({
                                    type: _$_c793[17],
                                    url: _$_c793[42],
                                    success: function(g) {
                                        $(_$_c793[21])[_$_c793[20]](g)[_$_c793[19]]()[_$_c793[8]]();
                                        if ($(window)[_$_c793[24]]() < 480) {
                                            $(_$_c793[29])[_$_c793[28]]({
                                                scrollTop: $(_$_c793[27])[_$_c793[26]]()[_$_c793[25]]
                                            }, 1000)
                                        };
                                        $(_$_c793[21])[_$_c793[34]](_$_c793[31])[_$_c793[33]](_$_c793[30], function() {
                                            $(this)[_$_c793[32]](_$_c793[31])
                                        });
                                        $(_$_c793[43])[_$_c793[20]]($capacity_1);
                                        $(_$_c793[44])[_$_c793[20]]($capacity_2);
                                        var $selected_capacity = $capacity_1;

                                        function k($capacity_parent_class) {
                                            l();
                                            if ($capacity_parent_class[_$_c793[36]](_$_c793[45])) {
                                                $selected_capacity = $capacity_1
                                            };
                                            if ($capacity_parent_class[_$_c793[36]](_$_c793[46])) {
                                                $selected_capacity = $capacity_2
                                            };
                                            $capacity_parent_class[_$_c793[34]](_$_c793[47])
                                        }

                                        function l() {
                                            var $capacity_list = $(_$_c793[48]);
                                            if ($capacity_list[_$_c793[36]](_$_c793[47])) {
                                                $capacity_list[_$_c793[32]](_$_c793[47])
                                            }
                                        }
                                        $(_$_c793[49])[_$_c793[40]](function() {
                                            k($(this))
                                        });
                                        $(_$_c793[67])[_$_c793[40]](function() {
                                            $[_$_c793[66]]({
                                                type: _$_c793[17],
                                                url: _$_c793[50],
                                                success: function(g) {
                                                    $(_$_c793[21])[_$_c793[20]](g)[_$_c793[19]]()[_$_c793[8]]();
                                                    if ($(window)[_$_c793[24]]() < 480) {
                                                        $(_$_c793[29])[_$_c793[28]]({
                                                            scrollTop: $(_$_c793[27])[_$_c793[26]]()[_$_c793[25]]
                                                        }, 1000)
                                                    };
                                                    $(_$_c793[21])[_$_c793[34]](_$_c793[31])[_$_c793[33]](_$_c793[30], function() {
                                                        $(this)[_$_c793[32]](_$_c793[31])
                                                    });
                                                    $(_$_c793[56])[_$_c793[55]]()[_$_c793[54]](_$_c793[51], function(n) {
                                                        if (n[_$_c793[52]]()) {} else {
                                                            n[_$_c793[53]]();
                                                            m()
                                                        }
                                                    });

                                                    function m() {
                                                        $[_$_c793[66]]({
                                                            type: _$_c793[17],
                                                            url: _$_c793[57],
                                                            success: function(g) {
                                                                $(_$_c793[21])[_$_c793[20]](g)[_$_c793[19]]()[_$_c793[8]]();
                                                                $(_$_c793[21])[_$_c793[34]](_$_c793[31])[_$_c793[33]](_$_c793[30], function() {
                                                                    $(this)[_$_c793[32]](_$_c793[31])
                                                                });

                                                                function o(percent, $element) {
                                                                    var r = percent * $element[_$_c793[24]]() / 100;
                                                                    $element[_$_c793[60]](_$_c793[59])[_$_c793[28]]({
                                                                        width: r
                                                                    }, 500)[_$_c793[20]](percent + _$_c793[58])
                                                                }
                                                                o(0, $(_$_c793[61]));
                                                                $(_$_c793[61])[_$_c793[8]]();
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_1);
                                                                    o(10, $(_$_c793[61]))
                                                                }, 500);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_2);
                                                                    o(30, $(_$_c793[61]))
                                                                }, 1600);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_3);
                                                                    o(40, $(_$_c793[61]))
                                                                }, 3000);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_4 + _$_c793[63] + $reward_1 + _$_c793[63] + $selected_capacity + _$_c793[63] + $selected_finish);
                                                                    o(55, $(_$_c793[61]))
                                                                }, 4000);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_5);
                                                                    o(80, $(_$_c793[61]))
                                                                }, 5500);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_6);
                                                                    o(90, $(_$_c793[61]))
                                                                }, 6500);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_7);
                                                                    o(90, $(_$_c793[61]))
                                                                }, 8000);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[20]]($console_message_8);
                                                                    o(90, $(_$_c793[61]))
                                                                }, 9200);
                                                                setTimeout(function() {
                                                                    $(_$_c793[62])[_$_c793[10]](function() {
                                                                        $(_$_c793[64])[_$_c793[8]]();
                                                                        if ($(window)[_$_c793[24]]() < 480) {
                                                                            $(_$_c793[29])[_$_c793[28]]({
                                                                                scrollTop: $(_$_c793[64])[_$_c793[26]]()[_$_c793[25]]
                                                                            }, 1000)
                                                                        }
                                                                    })
                                                                }, 10500)
                                                            },
                                                            error: function() {
                                                                alert(_$_c793[65])
                                                            }
                                                        })
                                                    }
                                                },
                                                error: function() {
                                                    alert(_$_c793[65])
                                                }
                                            })
                                        })
                                    },
                                    error: function() {
                                        alert(_$_c793[65])
                                    }
                                })
                            })
                        },
                        error: function() {
                            alert(_$_c793[65])
                        }
                    })
                } else {
                    if (e[_$_c793[16]] == _$_c793[69]) {
                        $(_$_c793[71])[_$_c793[20]](_$_c793[70])
                    } else {
                        if (e[_$_c793[16]] == _$_c793[72]) {
                            $(_$_c793[71])[_$_c793[20]](_$_c793[73])
                        }
                    }
                }
            },
            error: function() {
                alert(_$_c793[65])
            }
        })
    })

    $(".popup-contact").click(function() {
        $.magnificPopup.open({
            items: {
                src: '#contact-us',
            },
            type: 'inline',
            preloader: false,
            modal: true,
            removalDelay: 300,
            callbacks: {
                open: function() {
                    $('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('bounceIn');
                    });
                    $("#popup-contact-close").click(function() {
                        $.magnificPopup.close();
                    });
                },
                beforeClose: function() {
                    this.content.addClass('animated fadeOutDown');
                },
                close: function() {
                    this.content.removeClass('animated fadeOutDown');
                }
            }
        });
    });
    $(".popup-pp").click(function() {
        $.magnificPopup.open({
            items: {
                src: '#privacy-policy',
            },
            type: 'inline',
            preloader: false,
            modal: true,
            removalDelay: 300,
            callbacks: {
                open: function() {
                    $('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('bounceIn');
                    });
                    if ($(window).width() > 480) {
                        $('#privacy-policy .tos-pp-content-wrapper').perfectScrollbar({
                            wheelSpeed: 3
                        });
                    }
                    $("#popup-privacy-policy-close").click(function() {
                        $.magnificPopup.close();
                    });
                },
                beforeClose: function() {
                    this.content.addClass('animated fadeOutDown');
                },
                close: function() {
                    this.content.removeClass('animated fadeOutDown');
                }
            }
        });
    });
    $(".popup-tos").click(function() {
        $.magnificPopup.open({
            items: {
                src: '#terms-of-service',
            },
            type: 'inline',
            preloader: false,
            modal: true,
            removalDelay: 300,
            callbacks: {
                open: function() {
                    $('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('bounceIn');
                    });
                    if ($(window).width() > 480) {
                        $('#terms-of-service .tos-pp-content-wrapper').perfectScrollbar({
                            wheelSpeed: 3
                        });
                    }
                    $("#popup-terms-of-service-close").click(function() {
                        $.magnificPopup.close();
                    });
                },
                beforeClose: function() {
                    this.content.addClass('animated fadeOutDown');
                },
                close: function() {
                    this.content.removeClass('animated fadeOutDown');
                }
            }
        });
    });

});