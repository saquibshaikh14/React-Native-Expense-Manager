// // import React, { PropsWithChildren } from "react";
// // import { StyleSheet, Text, View } from "react-native";

// // type HeaderContainerChildren = PropsWithChildren<{}>
// // export default function HeaderContainer({ children }: HeaderContainerChildren) {
// //     return (
// //         <View style={styles.header}>
// //             {children}
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     header: {
// //     }
// // });

// import React, { PropsWithChildren, ReactNode } from 'react';
// import { View, Text, StyleSheet, ViewStyle } from 'react-native';

// interface HeaderProps {
//     children: ReactNode | ReactNode[];
// }

// type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

// const Header = ({ children }: PropsWithChildren<{ alignment?: JustifyContent }>) => {
//     const renderChild = (child: ReactNode, alignment: JustifyContent) => {
//         const childStyle: ViewStyle = {
//             // justifyContent: alignment,
//         };
//         // console.log(alignment)
//         return (
//             <>
//                 <View>{child}</View>
//             </>


//         );
//     };

//     const childArray = React.Children.toArray(children);

//     return (
//         <View style={styles.container}>
//             {childArray.map((child, index) => {
//                 // Default alignment is 'center' if not specified
//                 if (React.isValidElement(child)) {
//                     const alignment = child.props.wrapperStyle.alignment;
//                     console.log(alignment)
//                     // const alignment = (child as any)?.props?.alignment || 'flex-start';
//                     return renderChild(child, alignment);
//                 }
//             })}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         justifyContent: "space-between",

//     }
// });

// export default Header;


import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Headercomponent {
    component: ReactNode,
    styles?: StyleProp<ViewStyle>
}
interface HeaderProps {
    left?: Headercomponent;
    center?: Headercomponent;
    right?: Headercomponent;
}

const Header: React.FC<HeaderProps> = ({ left, center, right }) => {
    return (
        <View style={styles.container}>
            {left ? <View style={[styles.default, left.styles]}>{left.component}</View> : <View style={styles.blankSpaceFiller}></View>}
            {center ? <View style={[styles.default, center.styles]}>{center.component}</View> : <View style={styles.blankSpaceFiller}></View>}
            {right ? <View style={[styles.default, right.styles]}>{right.component}</View> : <View style={styles.blankSpaceFiller}></View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
    },
    blankSpaceFiller: {
        flex: 1,
    },
    default: {
        flex: 1,
        alignItems: "center"
    }
});

export default Header;
