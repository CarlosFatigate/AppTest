const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    let initials = nameArray[0][0];
    if (nameArray[1]) {
      initials += nameArray[1][0];
    } else {
      initials += nameArray[0][1];
    }
    return initials;
  };

export default {getInitials}