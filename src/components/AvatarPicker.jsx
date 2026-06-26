function AvatarPicker({ selected, setSelected }) {

    const avatars = [
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Alex",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Luna",
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Leo"
    ];

    return (
        <div className="avatar-picker">

            <h2>Choose Your Avatar</h2>

            <div className="avatar-grid">

                {avatars.map((avatar, index) => (

                    <img
                        key={index}
                        src={avatar}
                        alt={`avatar-${index}`}
                        className={
                            selected === avatar
                                ? "avatar selected-avatar"
                                : "avatar"
                        }
                        onClick={() => setSelected(avatar)}
                    />

                ))}

            </div>

        </div>
    );
}

export default AvatarPicker;