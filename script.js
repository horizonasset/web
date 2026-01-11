document.addEventListener('DOMContentLoaded', function () {
    const phoneOption = document.getElementById('phoneOption');
    const laptopOption = document.getElementById('laptopOption');


    // From import
    // function handlePhoneSelect() {
    //     console.log('Phone selected');
    //     // Add your phone selection logic here
    //     // For example: redirect to phone-specific page or store preference
    //     alert('Phone selected! Redirecting to mobile experience...');
    // }

    // Mine
    function handlePhoneSelect() {
        console.log('Phone selected');
        window.location.href = 'https://www.figma.com/proto/5RMwf8wuiJFD78Nl3Kh69K/Website-design?node-id=138-85&p=f&t=o7od0MnrLXIrqtm1-1&scaling=min-zoom&content-scaling=fixed&page-id=138%3A84&starting-point-node-id=138%3A85';  // Replace with phone URL
    }


    // From export
    // function handleLaptopSelect() {
    //     console.log('Laptop selected');
    //     // Add your laptop selection logic here
    //     // For example: redirect to desktop-specific page or store preference
    //     alert('Laptop selected! Redirecting to desktop experience...');
    // }

    // Mine
    function handleLaptopSelect() {
        console.log('Laptop selected');
        window.location.href = 'https://www.figma.com/proto/5RMwf8wuiJFD78Nl3Kh69K/Website-design?node-id=1-3&p=f&t=bFSx427vnuF3jDYJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1';  // Replace with laptop URL
    }

    // Add event listeners
    phoneOption.addEventListener('click', handlePhoneSelect);
    laptopOption.addEventListener('click', handleLaptopSelect);

    // Add keyboard support
    phoneOption.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handlePhoneSelect();
        }
    });

    laptopOption.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleLaptopSelect();
        }
    });
});
