(function($) {

    "use strict";

    // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
        currentClass: 'active'
    });

    $(window).on('load', function() {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
    });


    /* 
       CounterUp
       ========================================================================== */
    $('.counter').counterUp({
        time: 1000
    });

    /* 
       MixitUp
       ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
       Touch Owl Carousel
       ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1024, 2],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

    /* 
       Sticky Nav
       ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

    /* 
       VIDEO POP-UP
       ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


    /* 
     SMOOTH SCROLL
     ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });

    /* 
       Back Top Link
       ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })

    /* Nivo Lightbox
      ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });


    /* stellar js
      ========================================================*/
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });

    /* 
       Page Loader
       ========================================================================== */
  //  $('#loader').fadeOut();

}(jQuery));

/* 
   News Blog
   ========================================================================== */

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [650, 1],
        pagination: false,
        navigationText: false,
        autoPlay: true
    });
});

/*  change lang    direction :rtl
   ========================================================================== */

$("#en").click(function() {
    $("#boo").removeClass("rtl");
    $("#boo").addClass("ltr");


    $("#hom").text("Home");
    $("#Services").text("Services");
    $("#Clinics").text("Clinics");
    $("#Blog").text("Blog");
    $("#Portfolio").text("Portfolio");
    $("#Pricing").text("pricing");
    $("#Team").text("team");
    $("#Contact").text("contact");


    $("#hom1").text("Home");
    $("#Services1").text("Services");
    $("#Clinics1").text("Clinics");
    $("#Blog1").text("Blog");
    $("#Portfolio1").text("Portfolio");
    $("#Pricing1").text("pricing");
    $("#Team1").text("team");
    $("#Contact1").text("Contact");


    $("#nh").text("We Are");
    $("#nvbyrtrtetet22").text("patint form");
    $("#iuggsssss222").text("join us");
    $("#nhe").text("An Independent Healthcare Services Agency");
    $("#nh1").text("Founded in Damascus By Syrians, for Syrians. We Launched our service in order to fill the gap between Healthcare Providers and patients and help facilitate both their work and lives.");
    $("#db").text("We Provide");
    $("#fddddf").text("patint form");
    $("#dgggggdse").text("join us");
    $("#yuyu").text("Hospitalization and Home Health Care");
    $("#db1").text("Through our Successful partnerships with Hospitals, Medical Laboratories and Doctors, we are able to reach the highest levels of saving of Time and Energy, Especially in the situations of Emergencies");
    $("#sd").text("Our Goal");
    $("#ccceeeeeeww").text("patint form");
    $("#sssdddcxzzzzz").text("join us");
    $("#hgerbnmbv").text("An Effective, Modern and safer Healthcare Experience");
    $("#sd1").text("We’re aiming to reach the utmost level of use of modern communication technologies available in our grasp to provide a safer, more organized healthcare experience. ");
    $("#gh").text("Stop Smoking");
    $("#gh1").text("");
    $("#jf").text("Don't drink alcohol");
    $("#jf1").text("");
    $("#lk").text("Eat healthy&Life healthy");
    $("#lk1").text("");
    $("#nj").text("Taking the drug is beneficial to a certain extent, it becomes addictive!!");
    $("#nj1").text("Attention");
    $("#lw").text("Know your medicine, be sure to keep your medicine in the light, not in the dark.Don't Forget to take your medicine, Ask your pharmacist for ways to make it easier for you to remember your medicine on time. Remember to take medicines on a regular basis that helps the success and efficacy of medical treatment. Buy medicines only from a licensed pharmacy, if you are unsure, inform the Ministry of Health.");
    $("#kd").text("   Using prescribed medications in a way that the doctor did not intend can lead to drug abuse. Learn about the risk factors and treatment for drug abuse.");
    $("#bcbsrgdf44455").text("Our Services");
    $("#xd").html(" Health care is the maintenance or improvement of health via the prevention, diagnosis,injury, and other physical and mental impairments in people.");
    $("#ksssssssssksccmcm").html("Health care is delivered by health professionals and allied health fields.");
    $("#jge").text("RADIOTHERAPY TREATMENT");
    $("#ldls").text("We provide RADIOTHERAPY TREATMENT services at any time around the clock with gratitude . ");
    $("#lkdfv").text("NURSING SERVICES");
    $("#fnvkn").text("We provide NURSING SERVICES services at any time around the clock with gratitude .");
    $("#smdjms").text("X-RAY AND DIAGNOSTIC PROCEDURES");
    $("#mskdnfj").text("  We provide DIAGNOSTIC PROCEDURES services at any time around the clock with gratitude . ");
    $("#finlsc").text("DETOXIFICATION SERVICES");
    $("#dksdnk").text(" We provide DETOXIFICATION SERVICES services at any time around the clock with gratitude .");
    $("#lsndceuhcs").text("OBSTETRICS AND GYNECOLOGY ");
    $("#slmfnve").text("    We provide OBSTETRICS AND GYNECOLOGY services at any time around the clock with gratitude .");
    $("#ljfcvbdk").text("DENTAL SERVICES");
    $("#vhsbowk").text("  We provide DENTAL SERVICES services at any time around the clock with gratitude .");
    $("#hwjusp").text("Our Clinics");
    $("#bvdjdlswik7").html("In our Medical Myths series, we approach medical misinformation head on ,");
    $("#njwpj75").html("Using expert insight and peer reviewed research to wrestle fact from fiction.");
    $("#ewpodskl").text("Heart Clinic");
    $("#bsjkanm").text("We Are All Heart");
    $("#dkoskpsxx").text("Our dedicated doctors provide a diverse selection of cardiovascular treatments from convenient, state-of-the-art facilities in Alkhishe Medical Center.");
    $("#vn4542").text("Dr.Ghfran Nakhle");
    $("#ncskjfc44").text("2 Comments");
    $("#684522ccc").text("Dentist Clinic");
    $("#qqoeie9e8e").text("Your smile is your beauty");
    $("#jjllsssjjd").text(" Taking care of your health includes taking care of your smile. Oral health is essential for your well-being. Dental checkups and cleanings are important for healthy teeth.");
    $("#lsosoodkkd").text("Dr.Eman Nakhle");
    $("#kdkdsoswi").text("4 Comments");
    $("#skskdjd").text("Gynecologist Clinic");
    $("#kdwod875").text("Care your health, Madam");
    $("#kdmcnvbo55").text("Obstetrics is a medical specialty dealing with the fields of birth and related issues and Gynecology deals with diseases particular to women.");
    $("#slskdcmvnbvbnc").text("Dr.Razan");
    $("#sksk555").text("4 Comments");
    $("#kslsncnv553").text("Eye Clinic");
    $("#cjvvbbmmzmz").text("Your eyes are your life");
    $("#1222555ss").text(" Pediatric eye doctors and optometrists with patients of all ages agree that maintaining a healthy lifestyle is one of the best ways to keep your eyes.");
    $("#kdkdkslal").text("Dr.Ahmed");
    $("#slslskkfkdd").text("4 Comments");
    $("#kdkdkbnzla").text("Latest Blog");
    $("#cmsdkmsknd").text("UNICEF is working with experts to promote facts over fear, bringing reliable guidance to parents, caregivers and educators.   <br />  The COVID-19 pandemic has upended the lives of children and their families across the globe.");
    $("#nvvnvnx545").text(" Heartbeat and Oxygenation");
    $("#knlfjebvlskn").text("The pulse and oxygenation must be maintained within the normal range.");
    $("#24564vdv54").text("Attention to the temperature");
    $("#ldcldc5dd5d").text("The body temperature must be maintained within the normal range and not rise too much.");
    $("#ksnsc4s4vd6f45").text("importance taking the vaccine");
    $("#cnlksdnvln454dc").text("It is necessary to take the vaccine in order not to spread the Corona pandemic in the world.");

    $("#anvlkdsjn34678").text("Watch Our Medical Intro video");
    $("#kjfrdsadc123424vv").text("In our Medical Myths series, we approach medical misinformation head on. Using expert insight and peer reviewed research to wrestle fact from fiction");
    $("#895656e").text("Pricing Table");
    $("#254878544sc").html("The Health Care Plan covers the cost of medically necessary hospital services, provided at a hospital.");
    $("#uygedgfjjjjjssss").text("You must be registered under the Health Care card to receive these services.");
    $("#31486284dds").text("Per Day");
    $("#vbfjfjbvokd").text("Public");
    $("#nnkkjjhh").text("Diagnosis and treatment of illness and injury");
    $("#trweqrpipoi").text("Surgery, including anaesthetic services");
    $("#gtyerzxxlk").text("Obstetrical care, including prenatal and postnatal care");
    $("#nbvbcvxcdf").text("detoxification services in an approved health facility");
    $("#vbgftrdshj").text("Cosmetic surgery");
    $("#vgtfkkjwe5456").text("Registered");
    $("#ffgewweqwaazxv56").text("Per Week");
    $("#lyutrr46461").text("Private");
    $("#uyuyrytre6546fgfd").text("Diagnosis and treatment of illness and injury");
    $("#swqefrcszv3452asdc").text("Surgery, including anaesthetic services");
    $("#xcvxcadf6754sv").text("Obstetrical care, including prenatal and postnatal care");
    $("#vfddce324fe").text("detoxification services in an approved health facility");
    $("#bthnthfe3345wf").text(" Cosmetic surgery");
    $("#vv65").text("Registered");
    $("#uyrt785423gf").text("per month");
    $("#oijmn8866nmn").text("Special Care");
    $("#gdf4675vknf5332").text("Diagnosis and treatment of illness and injury");
    $("#sswweefgh6655322").text("Surgery, including anaesthetic services");
    $("#bybbytvcrc221").text("Obstetrical care, including prenatal and postnatal care");
    $("#unbyhvtcwzqs546553").text("detoxification services in an approved health facility");
    $("#nmuyercfbyzs26").text(" Cosmetic surgery");
    $("#bjbhyfrwa673439").text("Registered");
    $("#64645631").text("Working Days");
    $("#3265498321687").text("Intensive Care");
    $("#drdawxcuykjeshg2187").text("Healing People");
    $("#uhygdtvvbzcsr454721").text("Rescued People");
    $("#5edf4rf5f54dd").text("Our Team");
    $("#qwsdg64sv323sdv645").html("The good physician treats the disease; the great physician treats the patient who has the disease.");
    $("#ceeeeeeeeeeeeww").text("A faithful friend is the medicine of life.");
    $("#agre72121d85451d").text("Dr.Razan");
    $("#lhf25ddc63xx").text("Gynecologist Doctor");
    $("#mkfgjfskvna435453c").text("Dr.Mousab");
    $("#sknlsjdnfjsdn5454598sd").text("Eye Doctor");
    $("#kjduuddndlddsss").text("Dr.Reem");
    $("#bbbdddkkkjdjjsss").text("Dermatologist Doctor");
    $("#kdjjdkjksddsnmnmsds55").html("Doctors always think anybody doing something they aren’t is a quack");
    $("#wqqqqqqssa").html("also they think all patients are idiots.");
    $("#nnueriuryryyeihc55522").text("Adnan Alkeshi");
    $("#d5247788").text("Nerves Doctor");
    $("#jdjkds5454232322dd").html("There may be medical tools in your hands to treat the patient,");
    $("#hhhhhhhttttttttdd").text(" but those hands must be that of a loving, warm .");
    $("#ddddd6s6s6s6s22").text("Eman Nakhle");
    $("#c774s4d1sd11").text("Dentist Doctor");
    $("#jqaaddsf555d2s08s87d").html("Doctors always think anybody doing something they aren’t is a quack;");
    $("#cescdveeew").text("also they think all patients are idiots.");
    $("#udhccert223294").text("Sara Nakhle");
    $("#eyfyiddknvcmx").text("Dermatologist Doctor");
    $("#ueriyfgjsdbvkj78788754").html("There may be medical tools in your hands to treat the patient,");
    $("#fjdfhnsbd65f4b64b").text("but those hands must be that of a loving, warm .");
    $("#4543132s1dfsd1").text("Ghfran Nakhle");
    $("#2121ddsfggh21d").text("Heart Doctor ");
    $("#edg54f454fdv212vv").text("Contact With us");
    $("#te2e2ee2e2d2d2d2").text("Elixer,Alhez,damascus");
    $("#wswsdeeddcxc").text(" Phone:");
    $("#sfgfdsb2133111ff1f1").text("telephone:");
    $("#nvruehgiuhkjfs6541287").text("E-mail:");
    $("#kmnrdojgperj6532232").text("Send Message");
    $("#teyrt2312c647465c5ccc").text("ELIXIR - We are honored to have you visit our");
    $("#7855ss5122sss").text("page");
    $("#ibvjlkfdsbvldhg6556").text("log in");
    $("#chdfbsd347637673").text("register");
    $("#fhynrgbgb6456777").text(" remember password");
    $("#thjyn666777555").text("forget password?");
    $("#tetyergfn9999").text("click here");
    $("#bvhhhggjjkkkk").text("register");



});
$("#ar").click(function() {
    $("#boo").removeClass("ltr");
    $("#boo").addClass("rtl");


    $("#hom").text(" الرئيسية ");
    $("#Services").text("خدماتنا");
    $("#Clinics").text("عياداتنا");
    $("#Blog").text("المقالات");
    $("#Portfolio").text("الاعمال");
    $("#Pricing").text("الاسعار");
    $("#Team").text("فريقنا");
    $("#Contact").text("التواصل");


    $("#hom1").text(" الرئيسية ");
    $("#Services1").text("خدماتنا");
    $("#Clinics1").text("عياداتنا");
    $("#Blog1").text("المقالات");
    $("#Portfolio1").text("الاعمال");
    $("#Pricing1").text("الاسعار");
    $("#Team1").text("فريقنا");
    $("#Contact1").text("التواصل");


    $("#nh").text("نحن");
    $("#nvbyrtrtetet22").text("بطاقة المريض");
    $("#iuggsssss222").text("انضم لنا");
    $("#nhe").text("وكالة خدمات صحية مستقل");
    $("#nh1").text("تأسست في مدينة دمشق بأيدي سورية لخدمة السوريين. أطلقنا خدماتنا بهدف ملء الفجوة بين مقدمي الرعاية الصحية والمرضى والمساعدة على تسهيل كل من حياتهم وأعمالهم ");
    $("#db").text("نحن نقدم");
    $("#fddddf").text("بطاقة المريض");
    $("#dgggggdse").text(" انضم لنا");
    $("#yuyu").text("حجوزات في المشافي ورعاية صحية منزلية");
    $("#db1").text("من خلال شراكتنا الناجحة مع كل من المشافي، المختبرات الطبية والأطباء فنحن قادرون على تحقيق أقصى درجات توفير الوقت والجهد خصوصاً في الحالات والطارئة. ");
    $("#sd").text("هدفنا");
    $("#ccceeeeeeww").text("بطاقة المريض");
    $("#sssdddcxzzzzz").text("انضم لنا");
    $("#hgerbnmbv").text("رعاية صحية فعالة، حديثة، وأكثر أماناً");
    $("#sd1").text("نحن نهدف إلى تحقيق أقصى درجات الاستفادة من تقنيات التواصل الحديثة المتاحة في بلادنا من أجل تقديم رعاية صحية أكثر أمناً وتنظيماً.  ");
    $("#gh").text("توقف عن التدخين");
    $("#gh1").text("");
    $("#jf").text("لا تشرب المشروبات الحولية");
    $("#jf1").text("");
    $("#lk").text(" اكل صحي& حياة صحية");
    $("#lk1").text("");
    $("#nj").text("إن تناول الدواء مفيد إلى حد ما ، فإنه يصبح إدمانًا!!");
    $("#nj1").text("الرجاااء الانتباه");
    $("#lw").text("تعرف على دوائك ، وتأكد من إبقاء الدواء في الضوء ، وليس في الظلام. لا تنس تناول الدواء ، اسأل الصيدلي عن طرق تسهل عليك تذكر أدويتك في الوقت المحدد. تذكر أن تتناول الأدوية بشكل منتظم مما يساعد على نجاح وفعالية العلاج الطبي. قم بشراء الأدوية من صيدلية مرخصة فقط ، إذا كنت غير متأكد ، قم بإبلاغ وزارة الصحة.");
    $("#kd").text("  يمكن أن يؤدي استخدام الأدوية الموصوفة بطريقة لم يقصدها الطبيب إلى تعاطي المخدرات. تعرف على عوامل الخطر والعلاج من تعاطي المخدرات.");
    $("#bcbsrgdf44455").text("خدماتنا");
    $("#xd").html(" لرعاية الصحية هي الحفاظ على الصحة أو تحسينها من خلال الوقاية والتشخيص والإصابة وغيرها من الإعاقات الجسدية والعقلية لدى الأشخاص.");
    $("#ksssssssssksccmcm").html("يتم تقديم الرعاية الصحية  من قبل المتخصصين الصحيين والمجالات الصحية المساعدة");
    $("#jge").text("العلاج الإشعاعي");
    $("#ldls").text("نحن نقدم خدمات العلاج الإشعاعي في أي وقت على مدار الساعة بامتنان ");
    $("#lkdfv").text("خدمات التمريض");
    $("#fnvkn").text("نحن نقدم خدمات التمريض في أي وقت على مدار الساعة بامتننا");
    $("#smdjms").text("الأشعة السينية وإجراءات التشخيص");
    $("#mskdnfj").text(" نحن نقدم خدمات الأشعة السينية وإجراءات التشخيص في أي وقت على مدار الساعة بامتنان ");
    $("#finlsc").text("خدمات ازالة السمووم");
    $("#dksdnk").text("نحن نقدم خدمات ازالة السموم في أي وقت على مدار الساعة بامتننا ");
    $("#lsndceuhcs").text("أمراض النساء والتوليد ");
    $("#slmfnve").text("  نحن نقدم خدمات أمراض النساء والتوليد في أي وقت على مدار الساعة بامتننا");
    $("#ljfcvbdk").text("خدمات سنية");
    $("#vhsbowk").text("  نحن نقدم خدمات خدمات سنية في أي وقت على مدار الساعة بامتننا");
    $("#hwjusp").text("عياداتنا");
    $("#bvdjdlswik7").html("في سلسلة الأساطير الطبية الخاصة بنا ، نتعامل مع المعلومات الطبية الخاطئة بشكل مباشر ،");
    $("#njwpj75").html("استخدام البصيرة الخبيرة والبحوث التي استعرضها الأقران لمصاربة الحقيقة من الخيال.");
    $("#ewpodskl").text("العيادة القلبية");
    $("#bsjkanm").text("كلنا قلب");
    $("#dkoskpsxx").text("يقدم أطباؤنا المتخصصون مجموعة متنوعة من علاجات القلب والأوعية الدموية من مرافق مريحة وحديثة   .");
    $("#vn4542").text("د.غفران نخلة");
    $("#ncskjfc44").text("2 تعليقات");
    $("#684522ccc").text("العيادة السنية");
    $("#qqoeie9e8e").text("ابتسامتك هي جمالك");
    $("#jjllsssjjd").text(" يشمل الاهتمام بصحتك الاهتمام بابتسامتك. صحة الفم ضرورية لرفاهيتك. فحوصات وتنظيف الأسنان مهمة لصحة الأسنان.");
    $("#lsosoodkkd").text("د.ايمان نخلة");
    $("#kdkdsoswi").text("4 تعليقات");
    $("#skskdjd").text("عيادة أمراض النساء");
    $("#kdwod875").text("اهتمي بصحتك سيدتي");
    $("#kdmcnvbo55").text("طب التوليد هو تخصص طبي يتعامل مع مجالات الولادة والقضايا ذات الصلة وأمراض النساء تتعامل مع الأمراض الخاصة بالنساء.");
    $("#slskdcmvnbvbnc").text("د.رزان");
    $("#sksk555").text("4 تعليقات");
    $("#kslsncnv553").text("العيادة العينية");
    $("#cjvvbbmmzmz").text("عيناك هي حياتك");
    $("#1222555ss").text(" يتفق أطباء عيون الأطفال وفاحصي النظر مع المرضى من جميع الأعمار على أن الحفاظ على نمط حياة صحي هو أحد أفضل الطرق للحفاظ على عينيك.");
    $("#kdkdkslal").text("د.احمد");
    $("#slslskkfkdd").text("4 تعليقات");
    $("#kdkdkbnzla").text("أحدث مدونة");
    $("#cmsdkmsknd").text("تعمل اليونيسف مع الخبراء لتعزيز الحقائق على الخوف ، وتقديم إرشادات موثوقة للآباء ومقدمي الرعاية والمعلمين. لقد قلب جائحة COVID-19 حياة الأطفال وأسرهم في جميع أنحاء العالم رأساً على عقب.");
    $("#nvvnvnx545").text(" نبضات القلب والأكسجين");
    $("#knlfjebvlskn").text("يجب الحفاظ على النبض والأكسجين ضمن المعدل الطبيعي.");
    $("#24564vdv54").text("الانتباه إلى درجة الحرارة");
    $("#ldcldc5dd5d").text("يجب الحفاظ على درجة حرارة الجسم ضمن المعدل الطبيعي وعدم ارتفاعها كثيرًا.");
    $("#ksnsc4s4vd6f45").text("أهمية أخذ اللقاح");
    $("#cnlksdnvln454dc").text("لا بد من أخذ اللقاح حتى لا ينتشر جائحة كورونا في العالم.");

    $("#anvlkdsjn34678").text("شاهد فيديو المقدمة الطبية");
    $("#kjfrdsadc123424vv").text("في سلسلة الأساطير الطبية الخاصة بنا ، نتعامل مع المعلومات الطبية الخاطئة بشكل مباشر. استخدام البصيرة الخبيرة والبحوث التي استعرضها الأقران لمصاربة الحقيقة من الخيال");
    $("#895656e").text("جدول التسعير");
    $("#254878544sc").html("تغطي خطة الرعاية الصحية تكلفة خدمات المستشفى الضرورية طبياً والمقدمة في المستشفى.");
    $("#uygedgfjjjjjssss").text("يجب أن تكون مسجلاً بموجب بطاقة الرعاية الصحية لتلقي هذه الخدمات.");
    $("#31486284dds").text(" كل يوكم");
    $("#vbfjfjbvokd").text("عام");
    $("#nnkkjjhh").text("تشخيص وعلاج المرض والإصابة");
    $("#trweqrpipoi").text("الجراحة ، بما في ذلك خدمات التخدير");
    $("#gtyerzxxlk").text("رعاية التوليد ، بما في ذلك رعاية ما قبل الولادة وبعدها");
    $("#nbvbcvxcdf").text("خدمات إزالة السموم في منشأة صحية معتمدة");
    $("#vbgftrdshj").text("الجراحة التجميلية");
    $("#vgtfkkjwe5456").text("تسجيل");
    $("#ffgewweqwaazxv56").text("في الاسبوع");
    $("#lyutrr46461").text("خاص");
    $("#uyuyrytre6546fgfd").text("تشخيص وعلاج المرض والإصابة");
    $("#swqefrcszv3452asdc").text("الجراحة ، بما في ذلك خدمات التخدير");
    $("#xcvxcadf6754sv").text("رعاية التوليد ، بما في ذلك رعاية ما قبل الولادة وبعدها");
    $("#vfddce324fe").text("خدمات إزالة السموم في منشأة صحية معتمدة");
    $("#bthnthfe3345wf").text("الجراحة التجميلية");
    $("#vv65").text("تسجيل");
    $("#uyrt785423gf").text("كل شهر");
    $("#oijmn8866nmn").text("رعاية خاصة");
    $("#gdf4675vknf5332").text("تشخيص وعلاج المرض والإصابة");
    $("#sswweefgh6655322").text("الجراحة ، بما في ذلك خدمات التخدير");
    $("#bybbytvcrc221").text("رعاية التوليد ، بما في ذلك رعاية ما قبل الولادة وبعدها");
    $("#unbyhvtcwzqs546553").text("خدمات إزالة السموم في منشأة صحية معتمدة");
    $("#nmuyercfbyzs26").text(" الجراحة التجميلية");
    $("#bjbhyfrwa673439").text("تسجيل");
    $("#64645631").text("أيام العمل");
    $("#3265498321687").text("عناية مشددة");
    $("#drdawxcuykjeshg2187").text(" الناس المتعافون");
    $("#uhygdtvvbzcsr454721").text("الناس المنقذين");
    $("#5edf4rf5f54dd").text("فريقنا");
    $("#qwsdg64sv323sdv645").html("والطبيب الجيد يعالج المرض. الطبيب العظيم يعالج المريض المصاب بالمرض.");
    $("#ceeeeeeeeeeeeww").text("الصديق المخلص هو دواء الحياة.");
    $("#agre72121d85451d").text("د.رزان");
    $("#lhf25ddc63xx").text("طبيبة نسائي");
    $("#mkfgjfskvna435453c").text("د.مصعب");
    $("#sknlsjdnfjsdn5454598sd").text("طبيب عيني");
    $("#kjduuddndlddsss").text("د.ريم");
    $("#bbbdddkkkjdjjsss").text("دكتور الأمراض الجلدية");
    $("#kdjjdkjksddsnmnmsds55").html("يعتقد الأطباء دائمًا أن أي شخص يفعل شيئًا لا يفعله هو دجال");
    $("#wqqqqqqssa").html("كما يعتقدون أن جميع المرضى أغبياء.");
    $("#nnueriuryryyeihc55522").text("عدنان الخشي");
    $("#d5247788").text("دكتور اعصاب");
    $("#jdjkds5454232322dd").html("قد تكون بين يديك أدوات طبية لعلاج المريض ،");
    $("#hhhhhhhttttttttdd").text(" ولكن يجب أن تكون تلك الأيدي دافئة ، محبة.");
    $("#ddddd6s6s6s6s22").text("ايمان نخلة");
    $("#c774s4d1sd11").text("طبيبة اسنان");
    $("#jqaaddsf555d2s08s87d").html("يعتقد الأطباء دائمًا أن أي شخص يفعل شيئًا لا يفعله هو دجال");
    $("#cescdveeew").text("كما يعتقدون أن جميع المرضى أغبياء.");
    $("#udhccert223294").text("سارة نخلة");
    $("#eyfyiddknvcmx").text("دكتور جلدية");
    $("#ueriyfgjsdbvkj78788754").html("قد تكون بين يديك أدوات طبية لعلاج المريض ،");
    $("#fjdfhnsbd65f4b64b").text("ولكن يجب أن تكون تلك الأيدي دافئة ، محبة.");
    $("#4543132s1dfsd1").text("غفران نخلة");
    $("#2121ddsfggh21d").text("دكتورة قلبية ");
    $("#edg54f454fdv212vv").text("اتصل بنا");
    $("#te2e2ee2e2d2d2d2").text("إكسير ، الحجاز ، دمشق");
    $("#wswsdeeddcxc").text(" هاتف:");
    $("#sfgfdsb2133111ff1f1").text("موبايل:");
    $("#nvruehgiuhkjfs6541287").text("الايميل:");
    $("#kmnrdojgperj6532232").text("أرسال الرسالة");
    $("#teyrt2312c647465c5ccc").text("إليكسير - يشرفنا زيارتك لنا");
    $("#7855ss5122sss").text("صفحتنا");

    $("#ibvjlkfdsbvldhg6556").text("تسجيل دخول");
    $("#chdfbsd347637673").text("انشاء حساب");
    $("#fhynrgbgb6456777").text(" تذكير كلمة المرور");
    $("#thjyn666777555").text(" هل نسيت كلمة السر؟");
    $("#tetyergfn9999").text("انقر هنا");
    $("#bvhhhggjjkkkk").text("تسجيل");
});