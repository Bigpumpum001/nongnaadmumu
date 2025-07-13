import React from 'react'
import TypewriterText from './TypewriterText';
import nad1 from '../img/nad1.jpg'
import nad2 from '../img/nad2.jpg'
import nad3 from '../img/nad3.jpg'
import nad4 from '../img/nad4.jpg'
import nad5 from '../img/nad5.jpg'
import nad6 from '../img/nad6.jpg'
import nad7 from '../img/nad7.jpg'
import nad8 from '../img/nad8.jpg'
import nad9 from '../img/nad9.jpg'
import nad10 from '../img/nad10.jpg'
import nad11 from '../img/nad11.jpg'

function BookComponent() {
    const bookPages = [
        {
            text: "รูปแรกที่เค้ามี",
            // ใช้รูปภาพจำลอง หรือเปลี่ยนเป็น URL รูปภาพของคุณเอง
            image: nad5,


        },
        {
text: "ไปทะเลด้วยกันครั้งแรก",            // ใช้รูปภาพจำลอง หรือเปลี่ยนเป็น URL รูปภาพของคุณเอง
            image: nad6,


        },
        {
            text: "เหมียวบูด",
            image: nad3,


        },
        {
            text: "ใครน่ารักกว่ากันน้า",
            image: nad4,


        },
        {
           text: "หนูเป็นแมวติ๊งต๊องค่ะ",
            image: nad7,


        },
        {
            text: "ไม่ต้องพู๊ดดด",
            image: nad8,


        },
        {
           text: "แมวกะหมาอลเวง",
            image: nad9,


        },
        {
            text: "กะละมังแมว",
            image: nad10,


        },
        {
            text: "บูดอีกแนะ",
            image: nad11,


        },
        // {
        //     // text: "หน้า 2: ทุกๆ วันมีความหมายเสมอ รักเธอนะ!",
        //     image: "../img/nad1.jpg?text=PAGE+2",
        // },
        // {
        //     // text: "สุขสันต์วันเกิด! 🎁 หวังว่าปีนี้จะเป็นปีที่วิเศษสำหรับเธอนะ",
        //     // ใช้รูปภาพจำลอง หรือเปลี่ยนเป็น URL รูปภาพของคุณเอง
        //     image: "../img/nad1.jpg?text=PAGE+3",
        // },
    ];

    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);


    const [dragStart, setDragStart] = React.useState(null);
    const [dragEnd, setDragEnd] = React.useState(null);
    const [isDragging, setIsDragging] = React.useState(false); // สำหรับตรวจจับการลากเมาส์

    const hasSwiped = React.useRef(false);

    const minDragDistance = 50; // ระยะห่างที่ถือว่าเป็นการลากเพื่อเปลี่ยนหน้า

    const nextPage = () => {
        if (currentPageIndex < bookPages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
            console.log(currentPageIndex, 'nex')
        }
    };

    const prevPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
            console.log(currentPageIndex, 'pre')
        }
    };

    // ---------------- Mouse and Touch Logic ----------------

    // ฟังก์ชันเริ่มการลาก/แตะ (Mouse Down / Touch Start)
    const handleStart = (e) => {
        hasSwiped.current = false; // 🟢 เพิ่มบรรทัดนี้ เพื่อรีเซ็ตตัวล็อก

        setIsDragging(true);
        setDragEnd(null);
        // ตรวจสอบว่าเป็น Touch Event หรือ Mouse Event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setDragStart(clientX);
    };

    // ฟังก์ชันขณะลาก/ปัด (Mouse Move / Touch Move)
    const handleMove = (e) => {
        // เฉพาะเมื่อมีการลาก (สำหรับเมาส์) หรือมีการปัด (สำหรับ Touch)
        if (!e.touches && !isDragging) return;

        // ตรวจสอบว่าเป็น Touch Event หรือ Mouse Event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setDragEnd(clientX);
    };

    // ฟังก์ชันสิ้นสุดการลาก/ปัด (Mouse Up / Touch End)
    const handleEnd = () => {
        setIsDragging(false);
        if (hasSwiped.current || dragStart === null || dragEnd === null) {
            return;
        }
        if (dragStart === null || dragEnd === null) return;

        const distance = dragStart - dragEnd;
        const isSwipe = Math.abs(distance) > minDragDistance;

        if (isSwipe) {
            hasSwiped.current = true; // 🟢 ตั้งค่า: ล็อกทันทีที่ตรวจพบการปัดสำเร็จ

            if (distance > 0) {
                // Drag/Swipe Left: ไปหน้าถัดไป
                nextPage();
                console.log(currentPageIndex)
            } else {
                // Drag/Swipe Right: ย้อนกลับหน้าก่อนหน้า
                prevPage();
            }
        }

        setDragStart(null);
        setDragEnd(null);
    };


    return (
        <div className="d-flex flex-column align-items-center">
            {/* ข้อความพิมพ์ด้านบนหนังสือ */}
            <TypewriterText text="Surprise ja! 🐶ྀི (Can Swipe na)" />

            {/* Container หนังสือ (จำลอง) */}
            <div className="card shadow " style={{
                backgroundColor: 'transparent',
                maxWidth: '500px',
                maxHeight: window.innerWidth >= 991 ? '700px' : '400px',
                overflow: 'hidden',
                position: 'relative'
            }}
                // Mouse Events
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd} // จัดการเมื่อเมาส์ออกจากพื้นที่ขณะลาก

                // Touch Events (สำหรับมือถือ)
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
            >
                {/* Book Content Wrapper: สำหรับแอนิเมชั่นเลื่อน */}
                <div
                    style={{
                        display: 'flex',
                        // เลื่อนตำแหน่งตามหน้าที่แสดง เพื่อให้หน้าถัดไป/ก่อนหน้าเลื่อนเข้ามาแทน
                        transform: `translateX(${-currentPageIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out', // แอนิเมชั่นการเลื่อนที่สมูท
                        width: `${
                            // bookPages.length * 
                            100}%` // ความกว้างเท่ากับจำนวนหน้า * 100%
                    }}
                >
                    {/* Map ทุกหน้า */}
                    {bookPages.map((page, index) => (
                        <div
                            key={index}
                            style={{
                                width: `${100
                                    // / bookPages.length
                                    }%`, // ความกว้างแต่ละหน้าเท่ากับความกว้างของ wrapper
                                flexShrink: 0 // ป้องกันการหดตัว
                            }}
                        >
                            <div className="d-flex justify-content-center mb-3">
                                <img
                                    src={page.image}
                                    alt={`Book Page ${index + 1}`}
                                    className="img-fluid"
                                    style={{ maxWidth: '500px', maxHeight: window.innerWidth >= 991 ? '500px' : '200px', }}
                                />
                            </div>
                            <div className="text-center text-white book-text-page fs-4">
                                <p>{page.text}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* ปุ่มควบคุมการเปิดหน้า (ยังคงไว้สำหรับ Desktop/Tablet) */}
                {/* <div className="mt-4 d-flex justify-content-between">
                    <button
                        className="btn btn-outline-dark"
                        onClick={prevPage}
                        disabled={currentPageIndex === 0}>
                        &lt; ย้อนกลับ
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={nextPage}
                        disabled={currentPageIndex === bookPages.length - 1}>
                        หน้าถัดไป &gt;
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default BookComponent
