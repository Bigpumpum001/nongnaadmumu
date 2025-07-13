import React from 'react'
import TypewriterText from './TypewriterText';
function BookComponent() {
    const bookPages = [
        {
            // text: "สุขสันต์วันเกิด! 🎁 หวังว่าปีนี้จะเป็นปีที่วิเศษสำหรับเธอนะ",
            // ใช้รูปภาพจำลอง หรือเปลี่ยนเป็น URL รูปภาพของคุณเอง
            image: "https://bestanimations.com/media/birthday-cats/1429967726funny-cat-sunglasses-happy-birthday-gif.gif?text=PAGE+1",
        },
        {
            // text: "หน้า 2: ทุกๆ วันมีความหมายเสมอ รักเธอนะ!",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxVWjgNWL5_Hyx6jQ8yqWxLJmvx581KCgEA&s?text=PAGE+2",
        },
    ];

    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);

    const nextPage = () => {
        if (currentPageIndex < bookPages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        }
    };

    const prevPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const currentPage = bookPages[currentPageIndex];
    return (
        <div className="d-flex flex-column align-items-center">
            {/* ข้อความพิมพ์ด้านบนหนังสือ */}
            <TypewriterText text="Happy birthday dear gift! 🥳" />

            {/* Container หนังสือ (จำลอง) */}
            <div className="card shadow p-4" style={{ backgroundColor: '#f0f0f0', maxWidth: '500px' }}>
                <div className="d-flex justify-content-center mb-3">
                    <img
                        src={currentPage.image}
                        alt="Book Page"
                        className="img-fluid"
                        style={{ maxWidth: '400px', maxHeight: '300px' }}
                    />
                </div>
                <div className="text-center text-dark">
                    <p>{currentPage.text}</p>
                </div>

                {/* ปุ่มควบคุมการเปิดหน้า (ใช้ Bootstrap) */}
                <div className="mt-4 d-flex justify-content-between">
                    <button
                        className="btn btn-outline-dark"
                        onClick={prevPage}
                        disabled={currentPageIndex === 0}>
                        &lt; prevPage
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={nextPage}
                        disabled={currentPageIndex === bookPages.length - 1}>
                        nextPage &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookComponent
